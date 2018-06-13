webpackJsonp([5],{

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Detail = function Detail(_ref) {
  var match = _ref.match;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      match.params.id
    )
  );
};

exports.default = Detail;
module.exports = exports['default'];

/***/ })

});