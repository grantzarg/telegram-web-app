const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: "./src/index.js",
    devtool: "inline-source-map",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        port: 3000,
        historyApiFallback: true,
        allowedHosts: "all",
    },

    module: {
        // exclude node_modules
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                ]
            }
        ],
    },
    // pass all js files through Babel
    resolve: {
        extensions: [".*", ".js", ".jsx", '.css'],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    mangle: true,
                },
            }),
        ],
    },
};