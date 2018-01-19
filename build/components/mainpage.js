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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _materialUi = require('material-ui');

var _colors = require('material-ui/styles/colors');

var _List = require('material-ui/List');

var _Datasets = require('../containers/Datasets');

var _Datasets2 = _interopRequireDefault(_Datasets);

var _Projects = require('../containers/Projects');

var _Projects2 = _interopRequireDefault(_Projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainPage = function (_Component) {
  (0, _inherits3.default)(MainPage, _Component);

  function MainPage(props) {
    (0, _classCallCheck3.default)(this, MainPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MainPage.__proto__ || (0, _getPrototypeOf2.default)(MainPage)).call(this, props));

    _this.logout = function () {
      _this.props.actions.homePageActions.setShouldRedirect(false);
      _this.setState({ logout: true });
    };

    console.log('props', props);
    _this.state = {
      open: false,
      projects: [],
      mainview: 'Projects',
      logout: false
    };
    return _this;
  }

  (0, _createClass3.default)(MainPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      console.log('in mount', this.props.token);
      if (this.props.token) {
        _axios2.default.get('http://localhost:8080/getUserDatasets', { params: { accessToken: this.props.token } }).then(function (data) {
          _this2.props.actions.mainPageActions.addUserData(data.data.records);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var that = this;

      var forceNavDown = { 'top': '72px' };
      var positionTitle = { 'top': '-8px', 'backgroundColor': _colors.grey400, 'height': '73px' };

      var switchView = function switchView(view) {
        console.log('view at first', view);
        console.log('running switchView');
        if (view === 'Datasets') {
          that.props.actions.ProjectsActions.setSelectedProject(null);
        }
        that.props.actions.mainPageActions.changeView(view);
      };

      var getNewFiles = function getNewFiles() {
        if (that.props.token) {
          _axios2.default.get('http://localhost:8080/getUserDatasets', { params: { accessToken: that.props.token } }).then(function (data) {
            that.props.actions.mainPageActions.addUserData(data.data.records);
          });
        }
      };

      var MainView = function MainView(view) {
        var view = that.props.mainView || 'Projects';
        if (view === 'Projects') {
          return _react2.default.createElement(_Projects2.default, null);
        } else {
          return _react2.default.createElement(_Datasets2.default, null);
        }
      };

      return _react2.default.createElement(
        'div',
        { style: { height: '100vh' } },
        _react2.default.createElement(_materialUi.AppBar, { title: 'dataset.tools', showMenuIconButton: false, style: positionTitle, iconElementRight: _react2.default.createElement(_materialUi.FlatButton, { onClick: this.logout, label: 'Log Out' }) }),
        _react2.default.createElement(
          'div',
          { className: 'Container', style: { display: 'flex', 'top': '62px', height: '100%' } },
          _react2.default.createElement(
            'div',
            { className: 'Sidebar', style: { flexShrink: 0, 'backgroundColor': '#333d49', width: '150px', marginTop: '-10px' } },
            _react2.default.createElement(
              _List.List,
              null,
              _react2.default.createElement(_List.ListItem, { primaryText: 'Projects', onClick: function onClick() {
                  return switchView('Projects');
                } }),
              _react2.default.createElement(_List.ListItem, { primaryText: 'Datasets', onClick: function onClick() {
                  return switchView('Datasets');
                } }),
              _react2.default.createElement(_List.ListItem, { primaryText: 'Sync Files', onClick: function onClick() {
                  return getNewFiles();
                } })
            ),
            _react2.default.createElement(_materialUi.Divider, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'mainContent', style: { flexGrow: 1, flexShrink: 1 } },
            MainView()
          )
        ),
        this.state.logout && _react2.default.createElement(_reactRouter.Redirect, { to: '/' })
      );
    }
  }]);
  return MainPage;
}(_react.Component);

exports.default = MainPage;