const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    path: path.resolve(__dirname, './dev'),
    filename: "[name].[hash].js",
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../public/index.html'
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin()
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
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    quiet: false, //控制台中不输出打包的信息
    noInfo: false,
    hot: true, //开启热点
    inline: true, //开启页面自动刷新
    lazy: false, //不启动懒加载
    progress: false, //显示打包的进度
    watchOptions: {
      aggregateTimeout: 300
    },
    headers: { "X-Custom-Header": "yes" },
    port: '3000' //设置端口号
  }
};