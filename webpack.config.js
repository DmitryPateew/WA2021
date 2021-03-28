const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "public"),
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        watchContentBase: true,
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {from: "src/static", to: ""},
            ],
        }),
    ],
};
