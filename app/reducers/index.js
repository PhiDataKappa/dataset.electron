// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import * as tokenReducer from './homepage.js';
import * as mainViewReducer from './mainpage.js';
import * as setDownloadedDatasetsReducer from './Datasets.js';
import addToken from './homepage.js';
import addUserDataReducer from './MainPage2.js';
import shouldRedirectReducer from './homepage2.js';
import setSelectedProjectReducer from './Projects.js';


const rootReducer = combineReducers({
  router,
  mainView: mainViewReducer,
  token: tokenReducer,
  userData: addUserDataReducer,
  shouldRedirect: shouldRedirectReducer,
  downloadedDatasets: setDownloadedDatasetsReducer,
  selectedProject: setSelectedProjectReducer
});

export default rootReducer;
