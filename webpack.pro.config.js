const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// antd theme
var existsSync = require('fs').existsSync;
function resolve(dir) {
  return path.join(__dirname, './', dir)
}
const themePath = resolve('theme.js');
const theme = existsSync(themePath) ? require(themePath)() : {};

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js'
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "[name].[chunkhash].js",
    chunkFilename: '[name].[chunkhash].js',
    publicPath: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../public/index.html'
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CleanWebpackPlugin(
      ['dist/*',],　 //匹配删除的文件
      {
        root: __dirname,       　　　　　　　　　　//根目录
        verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
        dry:      false        　　　　　　　　　　//启用删除文件
      }
    )
  ],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.(css|less)$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "less-loader",
        options: {
          "modifyVars": theme
        }
      }]
    }, {
      test: /\.(png|jpg|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'img/[sha512:hash:base64:7].[ext]'
        }
      }
    }]
  }
};