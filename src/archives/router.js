

module.exports = [
  {
    path: 'archives',
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        return callback(null, require('./index'));
      });
    }
  }
];