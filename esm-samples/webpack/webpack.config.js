const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: ["./src/index.css", "./src/index.js"]
  },
  node: false,
  output: {
    path: path.join(__dirname, "dist"),
    chunkFilename: "chunks/[id].js",
    publicPath: "",
    clean: true
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "**",
          context: "node_modules/@esri/calcite-components/dist/calcite/",
          to: "./"
        }
      ]
    }),
    new HtmlWebPackPlugin({
      title: "ArcGIS API  for JavaScript",
      template: "./public/index.html",
      filename: "./index.html",
      chunksSortMode: "none",
      inlineSource: ".(css)$"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].css"
    })
  ]
};
