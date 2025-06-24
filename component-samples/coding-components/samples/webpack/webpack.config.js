const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    index: ["./src/index.css", "./src/index.js"],
  },
  node: false,
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  output: {
    path: path.join(__dirname, "dist"),
    chunkFilename: "chunks/[id].js",
    publicPath: "",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
  },
  experiments: {
    // Because we are using async/await in index.js
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
        // Exclude monaco-editor from source-map-loader
        exclude: /node_modules\/monaco-editor/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    // This plugin simplifies creation of HTML files to serve your webpack bundles.
    new HtmlWebPackPlugin({
      title: "Coding components Webpack sample",
      template: "./public/index.html",
      filename: "./index.html",
      chunksSortMode: "none",
      inlineSource: ".(css)$",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].css",
    }),
  ],
};
