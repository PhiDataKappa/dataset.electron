'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _Datasets = require('../components/Datasets');

var _Datasets2 = _interopRequireDefault(_Datasets);

var _Datasets3 = require('../actions/Datasets');

var DatasetsActions = _interopRequireWildcard(_Datasets3);

var _Projects = require('../actions/Projects');

var ProjectsActions = _interopRequireWildcard(_Projects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      DatasetsActions: (0, _redux.bindActionCreators)(DatasetsActions, dispatch),
      ProjectsActions: (0, _redux.bindActionCreators)(ProjectsActions, dispatch)
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Datasets2.default);