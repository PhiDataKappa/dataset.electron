'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _Upload = require('../components/Upload');

var _Upload2 = _interopRequireDefault(_Upload);

var _Upload3 = require('../actions/Upload');

var UploadActions = _interopRequireWildcard(_Upload3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    upload: state.upload
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(UploadActions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Upload2.default);