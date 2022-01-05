var path = require("path");
var copyWebpackPlugin = require("copy-webpack-plugin");
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',

    entry: {
        app: "./main.js"
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "js/main.js"
    },

    module: {
        rules: [
            {
                test: /\.(scss|css)/,
                use: [
                    {loader: 'css-hot-loader'},
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'},
                ],
            }, {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)/,
                dependency: { not: ['url'] },
                loader: 'url-loader',
            }, {
                test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[ext]',
                },
            }, {
                test: /\.(svg|png|jpg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'imgs/[name].[ext]',
                },
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `style.css`,
            chunkFilename: `style.[id].css`,
        }),
        new copyWebpackPlugin({ patterns: [
            { from: "./index.html" },
            { from: "./img", to: "img" },
            { from: "node_modules/jquery/dist/jquery.min.js", to: "js" },
            { from: "node_modules/slick-carousel/slick/slick.min.js", to: "js" },
            { from: "node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js", to: "js" },

            // { from: "node_modules/open-iconic/svg", to: "open-iconic/svg" },
            // { from: "node_modules/open-iconic/font", to: "open-iconic/font" }
        ]})
    ]
}