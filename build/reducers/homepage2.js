'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shouldRedirectReducer;

var _homepage = require('../actions/homepage');

function shouldRedirectReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'SET_SHOULD_REDIRECT':
      return action.text;
    default:
      return state;
  }
}