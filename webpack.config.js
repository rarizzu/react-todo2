var webpack = require('webpack'); //need this
var path = require('path');
module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery' //allows foundation to attach tot he jquery plugin
    },
    plugins: [ //plugins will provide us a shortcut to using the jquery module, webpack will look for $ sign and then require jquery
        new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery':'jquery'
        })
    ],
    output:{
        path: __dirname,
        filename:"./public/bundle.js"
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './app/components',
            './app/api'
        ],
        alias: {
            applicationStyles: 'app/styles/app.scss'
        },
        extensions: ["",".js",".jsx"]
    },
    
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },

    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};