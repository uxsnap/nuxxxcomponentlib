const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./components/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
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
        { from: 'styles', to: 'styles' },
        { from: 'icons', to: 'icons' },
      ],
    }),
  ],
  externals: {
    react: "react"
  }
};