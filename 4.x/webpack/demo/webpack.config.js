const ArcGISPlugin = require("@arcgis/webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const path = require("path");

module.exports = {
  entry: {
    index: ["./src/index.ts"]
  },
  output: {
    filename: "[name].[chunkhash].js",
    publicPath: ""
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        },
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
              loader: 'resolve-url-loader',
              options: { includeRoot: true },
          },
          {
              loader: 'sass-loader',
              options: {
                  sourceMap: true,
                  sassOptions: {
                    includePaths: [path.resolve('node_modules')]
                  }
              },
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),

    new ArcGISPlugin({
      features: {
        '3d': false
      },
    }),

    new HtmlWebPackPlugin({
      title: "ArcGIS Template Application",
      template: "src/index.html",
      filename: "index.html",
      favicon: "src/assets/favicon.ico",
      chunksSortMode: "none",
      inlineSource: ".(css)$"
    }),

    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].css"
    })
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, "/src"),
      path.resolve(__dirname, "node_modules/")
    ],
    extensions: [".ts", ".tsx", ".js", ".scss", ".css"],
    alias: {
      "esri": path.resolve(__dirname, 'node_modules/arcgis-js-api/')
    }
  },
  node: {
    process: false,
    global: false,
    fs: "empty"
  }
};
