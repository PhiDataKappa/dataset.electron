'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDownloadedDatasets = setDownloadedDatasets;
exports.removeDownloadedDataset = removeDownloadedDataset;
function setDownloadedDatasets(id, name) {
  return {
    type: 'SET_DOWNLOADED_DATASETS',
    text: name
  };
}

function removeDownloadedDataset(index) {
  return {
    type: 'REMOVE_DOWNLOADED_DATASET',
    index: index
  };
}