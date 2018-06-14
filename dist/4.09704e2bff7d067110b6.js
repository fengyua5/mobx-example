webpackJsonp([4],{

/***/ "iH3y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__("BX4+");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("dACh");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("jx4H");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("VOrx");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("ZKjc");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__("1n8/");

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__("lQiT");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArchivesIndex = (_dec = (0, _mobxReact.inject)('ats'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
  (0, _inherits3.default)(ArchivesIndex, _Component);

  function ArchivesIndex(props) {
    (0, _classCallCheck3.default)(this, ArchivesIndex);
    return (0, _possibleConstructorReturn3.default)(this, (ArchivesIndex.__proto__ || (0, _getPrototypeOf2.default)(ArchivesIndex)).call(this, props));
  }

  (0, _createClass3.default)(ArchivesIndex, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      // tab选中项
      return _react2.default.createElement(
        'div',
        null,
        'ats : ',
        props.ats.title,
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: function onClick() {
              props.ats.title = '00000';
            } },
          'changeTitle'
        )
      );
    }
  }]);
  return ArchivesIndex;
}(_react.Component)) || _class) || _class);
exports.default = ArchivesIndex;
module.exports = exports['default'];

/***/ })

});