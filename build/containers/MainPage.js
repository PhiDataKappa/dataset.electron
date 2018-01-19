'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _mainpage = require('../components/mainpage');

var _mainpage2 = _interopRequireDefault(_mainpage);

var _mainpage3 = require('../actions/mainpage');

var MainPageActions = _interopRequireWildcard(_mainpage3);

var _homepage = require('../actions/homepage');

var HomePageActions = _interopRequireWildcard(_homepage);

var _Projects = require('../actions/Projects');

var ProjectsActions = _interopRequireWildcard(_Projects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
import React, { Component } from 'react';
import MainPage from '../components/mainpage';

export default class Main extends Component {
  render() {
    return (
      <MainPage />
    );
  }
}
*/

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      mainPageActions: (0, _redux.bindActionCreators)(MainPageActions, dispatch),
      homePageActions: (0, _redux.bindActionCreators)(HomePageActions, dispatch),
      ProjectsActions: (0, _redux.bindActionCreators)(ProjectsActions, dispatch)
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_mainpage2.default);