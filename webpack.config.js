// Webpack uses this package to work with directories
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const Dotenv = require('dotenv-webpack');

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
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new Dotenv()
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader", // creates style nodes from JS Nodes {
                    "css-loader", // translates CSS into CommonJs
                    "sass-loader" // compiles Sass into to CSS, using node sass by default
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: 'url-loader'
            }

        ]
    }
}