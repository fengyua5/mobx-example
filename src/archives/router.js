

module.exports = [
  {
    path: 'archives',
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        console.log(111)
        return callback(null, require(/* webpackChunkName: "archivesIndex" */'./index'));
      });
    }
  }
];