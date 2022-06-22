const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const env = process.env.NODE_ENV || "development";

module.exports = {
    mode: env,
    entry: {
        app: [path.resolve(__dirname, "game.js")],
    },
    output: {
        pathinfo: false,
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },
    devServer: {
        static: "./dist",
    },
    watch: false,
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|json)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                        },
                    },
                ],
                type: "javascript/auto",
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, "./js"), "node_modules"],
        alias: {},
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
            inject: false,
        }),
        new CopyPlugin({
            patterns: ["./res/**/*"],
        }),
    ],
};
