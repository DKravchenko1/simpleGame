const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const CSSPlugin = new ExtractTextPlugin('app.css');


console.log('Dev');

module.exports = {
    devtool: "source-map",
    entry: [
        path.join(__dirname, 'src/app.js'),
        path.join(__dirname, 'src/app.scss')
    ],
    output: {
        filename: 'dist/bundle.js',
        path: path.join(__dirname, '')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.scss$/, loader: CSSPlugin.extract(['css-loader' , 'sass-loader'])
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'dist/images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        CSSPlugin
    ]
};