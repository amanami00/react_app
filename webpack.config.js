const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    SOURCE: path.join(__dirname, 'src')
};
const extractSass = new ExtractTextPlugin({
    filename: 'index.css',
});

module.exports = {
    entry: path.join(PATHS.SOURCE, 'index.js'),
    output: {
        path: `${__dirname}/build`,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', 'import-glob-loader']
                })
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(PATHS.SOURCE, 'index.html')
        }),
        extractSass
    ]
};
