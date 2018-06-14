var path = require("path"),
  fs = require('fs'),
  webpack = require("webpack");

var vendors = [
  'react',
  'react-router-dom',
  'react-loadable'
];

module.exports = {
  entry: {
    icdll: vendors
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "icdll.js",
    library: "[name]_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "/dist", "icdll.manifest.json"),
      name: "[name]_[hash]",
      context: __dirname
    })
  ]
};