var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');

module.exports = {

    entry: {
      app: path.resolve(__dirname,'../src/main.js'),
    },
    output: {
        path: path.resolve(__dirname,'../dist'),
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
            },
            {
                test: /\.(jpe?g|png|gif|svg|mp3)$/,
                loader: "url"
            }
        ]
    },
    plugins: [
      new webpack.BannerPlugin('Hello webpack232'),
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      }),
      new ExtractTextPlugin("css/style.css"),
      new HtmlWebpackPlugin({
        title:'111',
        filename:'index.html',
        template:'index.html',
      }),
      new webpack.HotModuleReplacementPlugin()

    ],
    vue: {
      loaders: {
          css: ExtractTextPlugin.extract("css"),
          less: ExtractTextPlugin.extract("css!less"),
          scss: ExtractTextPlugin.extract("css!sass"),
          stylus: ExtractTextPlugin.extract("css!stylus")
      }
    }

}
