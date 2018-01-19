'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _reactRouterDom = require('react-router-dom');

var _reactRouter = require('react-router');

var _Home = require('./Home.css');

var _Home2 = _interopRequireDefault(_Home);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this));

    _this.redir = function () {
      var at = document.getElementById('submit').value;
      _this.props.addAccessToken(at);
      _this.setState({ fireRedirect: true });
    };

    _this.state = {
      fireRedirect: false
    };
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (document.cookie && this.props.shouldRedirect) {
        var cookie = document.cookie;
        cookie = cookie.split('=')[1];
        console.log(cookie);
        this.props.addAccessToken(cookie);
        this.props.setShouldRedirect(true);
        this.setState({ fireRedirect: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var getFiles = function getFiles() {
        _axios2.default.get('8080/getdata').then(function (data) {
          console.log('Yeah');
        }).catch(function (error) {
          console.log(error);
        });
        console.log('in getFiles function');
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'homeContainer', 'data-tid': 'container' },
          _react2.default.createElement(
            'h2',
            { style: { color: '#f7f7f7', paddingTop: '10px', textAlign: 'center' } },
            'dataset.tools'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { style: { display: "flex", alignItems: "center", flexDirection: "column" } },
            _react2.default.createElement('img', { style: { width: "40%", height: "40%" }, id: 'dwimg', src: '../dist-assets/dw.logo_greyscale.svg' }),
            _react2.default.createElement(
              _RaisedButton2.default,
              { style: { width: "120px", height: "auto", padding: "10px", backgroundColor: "#4f5057" }, backgroundColor: '#4f5057', href: 'http://localhost:8080/authorize' },
              'Sign in with data.world'
            )
          ),
          this.state.fireRedirect && _react2.default.createElement(_reactRouter.Redirect, { to: '/mainpage' }),
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);
  return Home;
}(_react.Component);

exports.default = Home;