var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        // publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
              test: /\.vue$/,
              loader: 'vue'
            },
            // {
            //   test: /\.css$/,
            //   loader: 'vue-style!css'
            // },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel'
            },

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("css!less")
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract("css!sass")
            },
            {
                test: /\.styl/,
                loader: ExtractTextPlugin.extract("css!stylus")
            }
        ]
    },
    plugins: [
      new webpack.BannerPlugin('Hello webpack222'),
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      }),
      new ExtractTextPlugin("css/style.css"),
      new HtmlWebpackPlugin({
        title:'首页标题',
        filename:'index.html',
        template:'index.html',
      }),

    ],
    vue: {
      loaders: {
          css: ExtractTextPlugin.extract("css"),
          less: ExtractTextPlugin.extract("css!less"),
          scss: ExtractTextPlugin.extract("css!sass"),
          stylus: ExtractTextPlugin.extract("css!stylus")
      }
    },
    devServer: {
      port: 8083,
    }
}
