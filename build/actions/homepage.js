'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAccessToken = addAccessToken;
exports.setShouldRedirect = setShouldRedirect;
//export const ADD_ACCESS_TOKEN = 'ADD_ACCESS_TOKEN';

function addAccessToken(token) {
  return {
    type: 'ADD_ACCESS_TOKEN',
    text: token
  };
}

function setShouldRedirect(bool) {
  return {
    type: 'SET_SHOULD_REDIRECT',
    text: bool
  };
}