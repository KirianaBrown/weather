const Common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(Common, {
    mode: "production",
    devTool: "source-map",

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