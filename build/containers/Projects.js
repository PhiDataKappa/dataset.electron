'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _Projects = require('../components/Projects');

var _Projects2 = _interopRequireDefault(_Projects);

var _Projects3 = require('../actions/Projects');

var ProjectsActions = _interopRequireWildcard(_Projects3);

var _mainpage = require('../actions/mainpage');

var MainPageActions = _interopRequireWildcard(_mainpage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return state;
}
/*
 function mapDispatchToProps(dispatch) {
   return bindActionCreators(ProjectsActions, dispatch);
 }
 */

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ProjectsActions: (0, _redux.bindActionCreators)(ProjectsActions, dispatch),
      MainPageActions: (0, _redux.bindActionCreators)(MainPageActions, dispatch)
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Projects2.default);