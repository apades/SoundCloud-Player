const webpack = require('webpack')
const path = require('path')
const tsconfig = require('../tsconfig.json')
const WebpackBar = require('webpackbar')

let pr = (..._path) => path.resolve(__dirname, ..._path)
/**@type {webpack.Configuration} */
const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
    },
    module: {
        rules: [
            {
                test: /\.[tj]s$/,
                use: [{
                    loader: 'babel-loader',
                }],
                include: /(packages)/
                // exclude: /(node_modules)|(src)/,
            },
        ],
    },
    cache: {
        type: 'memory',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../src/lib'),
        libraryExport: "default",
        libraryTarget: "umd",
        library: "[name]",
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new WebpackBar()
    ]
}

module.exports = config