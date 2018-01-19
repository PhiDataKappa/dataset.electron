'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSelectedProject = setSelectedProject;
function setSelectedProject(project) {
  return {
    type: 'SET_SELECTED_PROJECT',
    text: project
  };
}