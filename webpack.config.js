/**
 * Created by Administrator on 2017/8/1 0001.
 */
let path = require('path');

module.exports = {
    entry: path.join(__dirname, 'asset/index.js'),
    output: {
        path: path.join(__dirname, 'asset/build'),
        publicPath: 'build/',
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.s(a|c)ss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
};
