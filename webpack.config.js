const webpack = require('webpack');

module.exports = {
    entry: './ex3/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 1231,
        contentBase: './public'
    }
}