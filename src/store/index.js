
// const store = {
//   archives: require('../archives/store/index.js'),
//   ats: require('../ats/store/index.js')
// };

const store = (r => {
  return r.keys().reduce((pre, cur) => {
    let key = cur.split('/')[1];
    pre[key] = r(cur);
    console.log(pre[key].shared);
    return pre;
  }, {});
})(require.context('../', true, /^\.\/((?!\/)[\s\S])+\/store\/index\.js/));


export default store;