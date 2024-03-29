const Common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const Dotenv = require("dotenv-webpack");

module.exports = merge(Common, {
    mode: "production",
    devtool: "source-map",

    module: {
        rules: [{
                test: /\.module\.s(a|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].[chunkhash].css",
        }),
        new Dotenv({
            systemvars: true,
        }),
        // new CleanWebpackPlugin({
        //     root: process.cwd(),
        //     verbose: true,
        //     dry: false,
        //     cleanOnceBeforeBuildPatterns: [
        //         "**/*",
        //         "!img",
        //         "!img/*",
        //         "!img/favicon",
        //         "!img/favicon/*",
        //     ],
        // }),
    ],
    resolve: {
        extensions: [".js", ".scss"],
    },
});