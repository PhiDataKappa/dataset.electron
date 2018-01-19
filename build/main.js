'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _electron = require('electron');

var _api = require('./api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var electron = require('electron');
var express = require('./api.js');
var isDevelopment = process.env.NODE_ENV === 'development';
var mainWindow = null;
var forceQuit = false;

var tray = null;
var trayIcon = _electron.nativeImage.createFromPath('dist-assets/datasetTools_tray_icon_menuIsVisible.png');

var installExtensions = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var installer, extensions, forceDownload, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, name;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            installer = require('electron-devtools-installer');
            extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];
            forceDownload = !!process.env.UPGRADE_EXTENSIONS;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 6;
            _iterator = (0, _getIterator3.default)(extensions);

          case 8:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 21;
              break;
            }

            name = _step.value;
            _context.prev = 10;
            _context.next = 13;
            return installer.default(installer[name], forceDownload);

          case 13:
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context['catch'](10);

            console.log('Error installing ' + name + ' extension: ' + _context.t0.message);

          case 18:
            _iteratorNormalCompletion = true;
            _context.next = 8;
            break;

          case 21:
            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t1 = _context['catch'](6);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 27:
            _context.prev = 27;
            _context.prev = 28;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 30:
            _context.prev = 30;

            if (!_didIteratorError) {
              _context.next = 33;
              break;
            }

            throw _iteratorError;

          case 33:
            return _context.finish(30);

          case 34:
            return _context.finish(27);

          case 35:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[6, 23, 27, 35], [10, 15], [28,, 30, 34]]);
  }));

  return function installExtensions() {
    return _ref.apply(this, arguments);
  };
}();

// crashReporter.start({
//   productName: 'YourName',
//   companyName: 'YourCompany',
//   submitURL: 'https://your-domain.com/url-to-submit',
//   uploadToServer: false
// });

_electron.app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    _electron.app.quit();
  }
});

_electron.app.on('ready', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
  var menu;
  return _regenerator2.default.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!isDevelopment) {
            _context2.next = 3;
            break;
          }

          _context2.next = 3;
          return installExtensions();

        case 3:
          mainWindow = new _electron.BrowserWindow({
            width: 800,
            height: 600,
            minWidth: 540,
            minHeight: 360,
            resizable: true,
            show: false,
            frame: true,
            titleBarStyle: 'hiddenInset'
          });

          mainWindow.loadURL(_url2.default.format({
            pathname: _path2.default.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
          }));

          mainWindow.webContents.once('did-finish-load', function () {
            mainWindow.show();
          });

          mainWindow.webContents.on('did-finish-load', function () {
            if (process.platform === 'darwin') {
              mainWindow.on('close', function (e) {
                if (!forceQuit) {
                  e.preventDefault();
                  mainWindow.hide();
                }
              });

              _electron.app.on('activate', function () {
                mainWindow.show();
              });

              _electron.app.on('before-quit', function () {
                forceQuit = true;
              });
            } else {
              mainWindow.on('closed', function () {
                mainWindow = null;
              });
            }
          });

          /////////  tray

          if (!tray) {
            tray = new _electron.Tray(trayIcon);
          }

          tray.on('click', function (event) {
            if (mainWindow.isVisible()) {
              mainWindow.hide();
            } else {
              mainWindow.show();
            }
          });

          tray.setToolTip('dataset.tools');

          ///////// menu bar creation

          menu = _electron.Menu.buildFromTemplate(fileMenu);


          _electron.Menu.setApplicationMenu(menu);

          if (isDevelopment) {
            // auto-open dev tools
            mainWindow.webContents.openDevTools();

            // add inspect element on right click menu
            mainWindow.webContents.on('context-menu', function (e, props) {
              _electron.Menu.buildFromTemplate([{
                label: 'Inspect element',
                click: function click() {
                  mainWindow.inspectElement(props.x, props.y);
                }
              }]).popup(mainWindow);
            });
          }

        case 13:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
})));

// set options for desktop app menubar

var fileMenu = [{
  label: 'Go to',
  submenu: [{
    label: 'dataset.tools',
    accelerator: 'CmdOrCtrl+T',
    click: function click(event) {
      require('electron').shell.openExternal('http://dataset.tools');
    }
  }, {
    label: 'data.world',
    accelerator: 'CmdOrCtrl+D',
    click: function click(event) {
      require('electron').shell.openExternal('http://data.world');
    }
  }, {
    type: 'separator'
  }, {
    label: 'Your local dataset folder',
    accelerator: 'CmdOrCtrl+O',
    click: function click(event) {
      require('electron').shell.showItemInFolder('' + storage);
    }
  }]
}, {
  label: 'View',
  submenu: [{
    label: 'Reload',
    accelerator: 'CmdOrCtrl+R',
    click: function click(item, focusedWindow) {
      if (focusedWindow) {
        // on reload, start fresh and close any old
        // open secondary windows
        if (focusedWindow.id === 1) {
          _electron.BrowserWindow.getAllWindows().forEach(function (win) {
            if (win.id > 1) {
              win.close();
            }
          });
        }
        focusedWindow.reload();
      }
    }
  }, {
    label: 'Toggle Full Screen',
    accelerator: function () {
      if (process.platform === 'darwin') {
        return 'Ctrl+Command+F';
      } else {
        return 'F11';
      }
    }(),
    click: function click(item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
      }
    }
  }, {
    label: 'Toggle Developer Tools',
    accelerator: function () {
      if (process.platform === 'darwin') {
        return 'Alt+Command+I';
      } else {
        return 'Ctrl+Shift+I';
      }
    }(),
    click: function click(item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.toggleDevTools();
      }
    }
  }, {
    type: 'separator'
  }, {
    label: 'About dataset.tools',
    click: function click(item, focusedWindow) {
      if (focusedWindow) {
        var options = {
          type: 'info',
          title: 'dataset.tools usage',
          buttons: ['Ok'],
          message: 'dataset.tools is a utility built for data.world users. Quickly access any of your datasets which need cleaning, edit locally, then update data.world profile with newly cleaned files'
        };
        electron.dialog.showMessageBox(focusedWindow, options, function () {});
      }
    }
  }]
}, {
  label: 'Window',
  role: 'window',
  submenu: [{
    label: 'Minimize',
    accelerator: 'CmdOrCtrl+M',
    role: 'minimize'
  }, {
    label: 'Close',
    accelerator: 'CmdOrCtrl+W',
    role: 'close'
  }, {
    type: 'separator'
  }, {
    label: 'Reopen Window',
    accelerator: 'CmdOrCtrl+Shift+T',
    enabled: false,
    key: 'reopenMenuItem',
    click: function click() {
      _electron.app.emit('activate');
    }
  }]
}, {
  label: 'Help',
  role: 'help',
  submenu: [{
    label: 'Learn More',
    click: function click() {
      electron.shell.openExternal('http://electron.atom.io');
    }
  }]
}];

function addUpdateMenuItems(items, position) {
  if (process.mas) return;

  var version = electron.app.getVersion();
  var updateItems = [{
    label: 'Version ' + version,
    enabled: false
  }, {
    label: 'Checking for Update',
    enabled: false,
    key: 'checkingForUpdate'
  }, {
    label: 'Check for Update',
    visible: false,
    key: 'checkForUpdate',
    click: function click() {
      require('electron').autoUpdater.checkForUpdates();
    }
  }, {
    label: 'Restart and Install Update',
    enabled: true,
    visible: false,
    key: 'restartToUpdate',
    click: function click() {
      require('electron').autoUpdater.quitAndInstall();
    }
  }];

  items.splice.apply(items, [position, 0].concat(updateItems));
}

function findReopenMenuItem() {
  var menu = _electron.Menu.getApplicationMenu();
  if (!menu) return;

  var reopenMenuItem = void 0;
  menu.items.forEach(function (item) {
    if (item.submenu) {
      item.submenu.items.forEach(function (item) {
        if (item.key === 'reopenMenuItem') {
          reopenMenuItem = item;
        }
      });
    }
  });
  return reopenMenuItem;
}

if (process.platform === 'darwin') {
  var name = 'dataset.tools';
  fileMenu.unshift({
    label: 'dataset.tools',
    submenu: [{
      label: 'About ' + name,
      role: 'about'
    }, {
      type: 'separator'
    }, {
      label: 'Services',
      role: 'services',
      submenu: []
    }, {
      type: 'separator'
    }, {
      label: 'Hide ' + name,
      accelerator: 'Command+H',
      role: 'hide'
    }, {
      label: 'Hide Others',
      accelerator: 'Command+Alt+H',
      role: 'hideothers'
    }, {
      label: 'Show All',
      role: 'unhide'
    }, {
      type: 'separator'
    }, {
      label: 'Quit',
      accelerator: 'Command+Q',
      click: function click() {
        _electron.app.quit();
      }
    }]
  });

  // Window menu.
  fileMenu[3].submenu.push({
    type: 'separator'
  }, {
    label: 'Bring All to Front',
    role: 'front'
  });

  addUpdateMenuItems(fileMenu[0].submenu, 1);
}