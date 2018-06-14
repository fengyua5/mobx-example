webpackJsonp([1],{

/***/ "Tk99":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("1n8/");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__("obMO");

var _reactLoadable = __webpack_require__("NEjq");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Loading = __webpack_require__("VIDU");

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lists = function Lists(_ref) {
  var match = _ref.match;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      '\u6211\u662F\u4E00\u4E2A\u5217\u8868'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/c/1' },
          '\u5217\u8868\u4E0B\u8FB9\u7684\u7B2C\u4E00\u4E2A'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/c/2' },
          '\u5217\u8868\u4E0B\u8FB9\u7684\u7B2C\u4E8C\u4E2A'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/c/3' },
          '\u5217\u8868\u4E0B\u8FB9\u7684\u7B2C\u4E09\u4E2A'
        )
      )
    ),
    _react2.default.createElement(_reactRouterDom.Route, { path: match.url, render: function render() {
        return _react2.default.createElement(
          'h3',
          null,
          '\u70B9\u51FB\u4E0A\u8FB9\u7684\u5217\u8868\u9879\u6B64\u5904\u663E\u793A\u4E0Eurl\u5730\u5740\u4E00\u6837\u7684...'
        );
      } }),
    _react2.default.createElement(_reactRouterDom.Route, {
      path: '/c/:id',
      component: (0, _reactLoadable2.default)({
        loader: function loader() {
          return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, "rqd+"));
        },
        loading: _Loading2.default
      })
    })
  );
};

exports.default = Lists;
module.exports = exports['default'];

/***/ })

});