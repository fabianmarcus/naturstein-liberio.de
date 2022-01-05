<<<<<<< HEAD
var webpack = require("webpack");

module.exports = {
    entry: {
        app: "js/main.js",
        vendor: [
            "jquery", 
            "bootstrap-sass",
        ]
    }
=======
var path = require("path");
var webpack = require("webpack");
var copyWebpackPlugin = require("copy-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        app: "./main.js"
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "js/main.js"
    },

    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css-loader!sass-loader')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css-loader')
        }, 
        { 
            test: /\.(woff|woff2|eot|ttf|otf)$/, 
            loader: 'file-loader?name=fonts/[name].[ext]' 
        },
        { 
            test: /\.(svg|gif|png|jpg|jpeg)$/, 
            loader: 'file-loader?name=img/[name].[ext]' 
        }
    ]},

    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),

        new copyWebpackPlugin([
            { from: "./index.html" },
            { from: "./img", to: "img" },
            { from: "node_modules/jquery/dist/jquery.min.js", to: "js" },
            { from: "node_modules/slick-carousel/slick/slick.min.js", to: "js" },
            { from: "node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js", to: "js" },

            // { from: "node_modules/open-iconic/svg", to: "open-iconic/svg" },
            // { from: "node_modules/open-iconic/font", to: "open-iconic/font" }
        ])
    ]
>>>>>>> cec96d8a464f60f3e901c84992fbdd388cf8dfa5
}