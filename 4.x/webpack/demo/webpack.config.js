const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
    entry: {
        index: ['./src/css/main.css', './src/index.ts'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        publicPath: '',
        clean: true
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3001,
    },
    // Optimize output in production only.
    optimization: {
        minimize: true,
        splitChunks: {
            minChunks: Infinity,
            chunks: 'all',
            cacheGroups: {
                defaultVendors: {
                    reuseExistingChunk: true,
                },
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(ttf|eot|svg|png|jpg|gif|ico|wsv|otf|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'ArcGIS Template Application',
            template: 'src/index.html',
            filename: 'index.html',
            favicon: 'src/assets/favicon.ico',
            chunksSortMode: 'none',
            inlineSource: '.(css)$',
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
            chunkFilename: '[id].css',
        }),
    ],
    resolve: {
        modules: [
            path.resolve(__dirname, '/src'),
            path.resolve(__dirname, 'node_modules/'),
        ],
        extensions: ['.ts', '.tsx', '.js', '.scss', '.css'],
        alias: {
            // arcgis-js-api/ to esri/
            esri: path.resolve(__dirname, 'node_modules/arcgis-js-api/'),
        },
    },
};
