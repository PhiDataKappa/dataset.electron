'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.download = download;
exports.downloadDataset = downloadDataset;
var DOWNLOAD = exports.DOWNLOAD = 'DOWNLOAD';

function download() {
  return {
    type: DOWNLOAD
  };
}

function downloadDataset() {
  return function (dispatch, getState) {
    var _getState = getState(),
        download = _getState.download;
    // TODO: write function inLocalFolder to check if dataset id is in local db


    if (inLocalFolder) {
      return;
    }

    dispatch(download());
  };
}