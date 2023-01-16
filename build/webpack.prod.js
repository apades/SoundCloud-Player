const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { DefinePlugin } = webpack;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const WebpackBar = require('webpackbar');
const webpackCommon = require('./webpack.common');
const { merge } = require('webpack-merge');

const files = require('./files');

module.exports = merge(webpackCommon, {
  devtool: false,
  bail: true,
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            pure_funcs: ['console.log'],
          },
        },
      }),
      new CssMinimizerPlugin({
        cache: true,
        parallel: true,
      }),
    ],
  },
  stats: {
    cached: true,
    chunks: false,
    chunkModules: false,
    colors: true,
    modules: false,
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: true,
    }),
    ...files.WebpackPluginList,
    new CopyPlugin({
      patterns: [
        { from: '../src/assets/**/*', to: '' },
        { from: '../src/lib/**/*', to: '' },
        {
          from: `../src/manifest.json`,
          to: `manifest.json`,
        },
      ],
    }),
    new DefinePlugin({
      'process.env.uiDev': `false`,
    }),
    new WebpackBar(),
  ],
  output: {
    path: path.resolve(__dirname, '../dist_prod'),
  },
});
