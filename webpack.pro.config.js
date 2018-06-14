const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const WebpackConcatPlugin = require('webpack-concat-plugin');
const AddFileToHtmlPlugin = require('./plugins/add-file-to-html');

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
    new CleanWebpackPlugin(
      ['dist'],　 //匹配删除的文件
      {
        root: __dirname,       　　　　　　　　　　//根目录
        verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
        dry:      false,        　　　　　　　　　　//启用删除文件
        exclude:  ['icdll.js', 'icdll.manifest.json']
      }
    ),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new HtmlWebpackPlugin({
      template: '../public/index.html'
    }),
    new AddFileToHtmlPlugin({
      paths: ['./icdll.js']
    }),
    new webpack.DllReferencePlugin({
      name: 'icdll',
      context: path.resolve(__dirname, './dist'),
      manifest: require(path.resolve(
        __dirname, './dist/icdll.manifest.json')
      )
    }),
    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    })
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