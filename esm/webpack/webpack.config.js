const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  node: false,
  output: {
    filename: "main.js",
    chunkFilename: "chunks/[id].js",
    publicPath: ""
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3001,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "node_modules/@arcgis/core/assets",
          to: "assets"
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
    new MomentLocalesPlugin()
  ]
};
