'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _homepage = require('./homepage.js');

var tokenReducer = _interopRequireWildcard(_homepage);

var _mainpage = require('./mainpage.js');

var mainViewReducer = _interopRequireWildcard(_mainpage);

var _Datasets = require('./Datasets.js');

var setDownloadedDatasetsReducer = _interopRequireWildcard(_Datasets);

var _MainPage = require('./MainPage2.js');

var _MainPage2 = _interopRequireDefault(_MainPage);

var _homepage2 = require('./homepage2.js');

var _homepage3 = _interopRequireDefault(_homepage2);

var _Projects = require('./Projects.js');

var _Projects2 = _interopRequireDefault(_Projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var rootReducer = (0, _redux.combineReducers)({
  router: _reactRouterRedux.routerReducer,
  mainView: mainViewReducer,
  token: tokenReducer,
  userData: _MainPage2.default,
  shouldRedirect: _homepage3.default,
  downloadedDatasets: setDownloadedDatasetsReducer,
  selectedProject: _Projects2.default
});
exports.default = rootReducer;