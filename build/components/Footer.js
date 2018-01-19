'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _BottomNavigation = require('material-ui/BottomNavigation');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _locationOn = require('material-ui/svg-icons/communication/location-on');

var _locationOn2 = _interopRequireDefault(_locationOn);

var _folderOpen = require('material-ui/svg-icons/file/folder-open');

var _folderOpen2 = _interopRequireDefault(_folderOpen);

var _language = require('material-ui/svg-icons/action/language');

var _language2 = _interopRequireDefault(_language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataworldIcon = _react2.default.createElement(_language2.default, null);
var folderIcon = _react2.default.createElement(_folderOpen2.default, null);
// const nearybyIcon = <FontIcon className="material-icons"></FontIcon>;
var datasetToolsIcon = _react2.default.createElement(_locationOn2.default, null);

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */

var BottomNavigationBar = function (_Component) {
  (0, _inherits3.default)(BottomNavigationBar, _Component);

  function BottomNavigationBar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, BottomNavigationBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BottomNavigationBar.__proto__ || (0, _getPrototypeOf2.default)(BottomNavigationBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedIndex: 0
    }, _this.select = function (index) {
      return _this.setState({ selectedIndex: index });
    }, _this.open = function () {
      return require('electron').shell.showItemInFolder(require('os').homedir());
    }, _this.dataworld = function () {
      return require('electron').shell.openExternal('http://data.world');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(BottomNavigationBar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _Paper2.default,
        { zDepth: 1 },
        _react2.default.createElement(
          _BottomNavigation.BottomNavigation,
          { selectedIndex: this.state.selectedIndex },
          _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
            label: 'dataset.tools',
            icon: datasetToolsIcon,
            onClick: function onClick() {
              return _this2.select(0);
            }
          }),
          _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
            label: 'local folder',
            icon: folderIcon,
            onClick: function onClick() {
              return _this2.open().select(1);
            }
          }),
          _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
            label: 'data.world',
            icon: dataworldIcon,
            onClick: function onClick() {
              return _this2.dataworld().select(2);
            }
          })
        )
      );
    }
  }]);
  return BottomNavigationBar;
}(_react.Component);

exports.default = BottomNavigationBar;