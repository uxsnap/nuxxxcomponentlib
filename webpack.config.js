const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/components/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[contenthash].[ext]',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'icons',
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/styles", to: "styles" },
        // { from: "other", to: "public" },
      ],
    }),
  ],
};
