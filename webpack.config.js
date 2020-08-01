const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIBS = [
  "react",
  "react-dom"
]

module.exports = {
  entry: {
    bundle: "./static/src/index.js",
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[hash].bundle.js",
    chunkFilename: "[name].[hash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      template: "./static/src/index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    hot: true,
    port: 5500,
  }
}