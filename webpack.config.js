const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/components/index.js", // that's no problem
  output: {
    path: path.resolve("build"),
    filename: "index.js",
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[contenthash].[ext]',
        },
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/styles', to: 'styles' },
        { from: 'src/icons', to: 'icons' },
      ],
    }),
  ],
  externals: {
    react: "react"
  }
};