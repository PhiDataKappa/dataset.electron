'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeView = changeView;
exports.addUserData = addUserData;
/*
export const ADD_ACCESS_TOKEN = 'ADD_ACCESS_TOKEN';

export function addAccessToken(token) {
  return {
    type: ADD_ACCESS_TOKEN,
    text: token
  };
}
*/

var CHANGE_VIEW = exports.CHANGE_VIEW = 'CHANGE_VIEW';
var ADD_USER_DATA = exports.ADD_USER_DATA = 'ADD_USER_DATA';

function changeView(view) {
  return {
    type: CHANGE_VIEW,
    text: view
  };
}

function addUserData(data) {
  return {
    type: ADD_USER_DATA,
    data: data
  };
}