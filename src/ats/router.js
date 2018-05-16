

module.exports = [
  {
    path: 'ats',
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        return callback(null, require('./index'));
      });
    }
  }
];