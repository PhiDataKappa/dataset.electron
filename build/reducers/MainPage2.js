'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addUserDataReducer;

var _mainpage = require('../actions/mainpage');

function addUserDataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_USER_DATA':
      return action.data;
    default:
      return state;
  }
}