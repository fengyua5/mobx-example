
function AddFileToHtmlPlugin(options) {
  this.options = options;
}

AddFileToHtmlPlugin.prototype.apply = function(compiler) {
  var paths = this.options.paths;
  console.log(paths, '---path')
  compiler.plugin('compilation', function(compilation, options) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
      for (var i = paths.length - 1; i >= 0; i--) {
        console.log('htmlPluginData----', htmlPluginData.assets);
        htmlPluginData.assets.js.unshift(paths[i]);
      }
      callback(null, htmlPluginData);
    });
  });
};

module.exports = AddFileToHtmlPlugin;