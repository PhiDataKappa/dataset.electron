'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = upload;
exports.uploadDataset = uploadDataset;
var UPLOAD = exports.UPLOAD = 'UPLOAD';

function upload() {
  return {
    type: UPLOAD
  };
}

function uploadDataset() {
  return function (dispatch, getState) {
    var _getState = getState(),
        upload = _getState.upload;
    // TODO: write function inLocalFolder to check if dataset id is in local db


    if (inLocalFolder) {
      return;
    }

    dispatch(upload());
  };
}