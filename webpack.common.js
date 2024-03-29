// Webpack uses this package to work with directories
const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

/* 
  MODULE.EXPORTS = {} IS THE MAIN CONFIGURATION OBJECT
  ~~ here you write different options and tell Webpack what to do
      1. ENTRY
        Path to your entry point. From this file webpack will begin its work
      2. OUTPUT OBJECT
        Path and filename of your result bundle. Webpack will bundle all javascript into this file
      3. MODE / DEV SERVER
        Default mode for webpack is production. Depending on mode webpack will apply different things on final bundle.
      4. PLUGINS
        Install htmlwebpackplugin allows you to copy index.html from src into dist and inject the src script.js file
      5. MODULE
        Use Babel Babel-loader to revert ES6+ back to browser compatiable ES5 and earlier
  */

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        // clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        }, ],
    },
};