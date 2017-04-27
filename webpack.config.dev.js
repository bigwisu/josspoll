const path = require('path');
const webpack = require('webpack');
const webpackOnBuildPlugin = require('on-build-webpack');
const replace = require("replace");
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    entry: {
        admin: './client/admin/',
        web: './client/web/'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name]-bundle-[hash].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpackOnBuildPlugin((stats) => {
            replace({
                regex: "(config.bundleHash.+)",
                replacement: `config.bundleHash="${stats.hash}";`,
                paths: ['./config.js'],
                recursive: true,
                silent: true,
            });
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react'],
                    plugins: [require('babel-plugin-transform-object-rest-spread')]
                }
            }]
        }, {
            test: /\.css$/,
            exclude: /(node_modules)/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => {
                            return [
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ]
                                })
                            ];
                        }
                    }
                }
            ]
        }, {
            test: /\.svg$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'file-loader',
                query: {
                    name: 'static/media/[name]-[hash].[ext]'
                }
            }]
        }]
    }
};