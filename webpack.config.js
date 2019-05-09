const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const PATHS = {
    SOURCE: path.join(__dirname, 'src')
};

module.exports = {
    entry: path.join(PATHS.SOURCE, 'index.js'),
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(PATHS.SOURCE, 'index.html')
        })
    ]
};
