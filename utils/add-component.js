
const path = require('path');
const fs = require('fs');
const colors = require('colors');
const _ = require('lodash');
const mkdirp = require('mkdirp');

const arguments = process.argv.splice(2);

const moduleName = arguments[0];

const struct = {
  'index.js': '',
  'src': {
    'index.less': '',
    'index.js': ''
  }
};
//
// // fs.mkdirSync('index.js')
// fs.writeFileSync('./dev/index.js', '');

if(!moduleName){
  console.log('请输入组件名称'.yellow);
  process.exit(0);
}

function getPath(struct, paths, res) {
  // 当前函数
  const callee = arguments.callee;

  paths = paths || '';
  res = res || {};

  // 遍历目录结构
  _.forEach(struct, function (v, k) {
    if (typeof v === 'object') {
      // 递归调用
      return callee(v, path.join(paths, k), res);
    } else {
      if (_.isArray(struct)) {
        k = v;
        v = '';
      }

      res[path.join(paths, k || '')] = v;
    }
  });

  return res;
}

function create() {
  let componentPath = path.resolve(`./dev/${moduleName}`);
  const paths = getPath(struct, componentPath);
  _.forEach(paths, (value, key) => {
    let dirPath = path.dirname(key);
    mkdirp.sync(dirPath);
    fs.writeFileSync(key, value || '');
  })
}

create();

