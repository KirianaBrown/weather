const Common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = merge(Common, {
    mode: "development",
    devServer: {
        port: 3000,
        hot: true,
        static: {
            directory: path.join(__dirname, "dist"),
        },
    },
    plugins: [new Dotenv()],
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                "style-loader" /* 3. JS --> <style> */ ,
                "css-loader" /* 2. CSS --> JS */ ,
                "sass-loader" /* 1. SASS --> CSS */ ,
            ],
        }, ],
    },
});