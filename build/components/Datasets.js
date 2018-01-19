'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('material-ui/Table');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
var storage = '../datasets';

var _require = require('electron'),
    ipcRenderer = _require.ipcRenderer,
    shell = _require.shell;
//------------------------------------------------------------------------------------------------


var Datasets = function (_Component) {
  (0, _inherits3.default)(Datasets, _Component);

  function Datasets(props) {
    (0, _classCallCheck3.default)(this, Datasets);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Datasets.__proto__ || (0, _getPrototypeOf2.default)(Datasets)).call(this, props));

    console.log('props in dataset', props);
    console.log('this.props in dataset', _this.props);
    return _this;
  }
  //------------------------------------------------------------------------------------------------


  (0, _createClass3.default)(Datasets, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('mounting Datasets');
      //this.props.actions.DatasetsActions.setSelectedDataset(null);
    }
    //------------------------------------------------------------------------------------------------

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('unmounting dataset');
      this.props.actions.ProjectsActions.setSelectedProject(null);
    }
    //------------------------------------------------------------------------------------------------

  }, {
    key: 'showDatasetInfo',
    value: function showDatasetInfo(row, column, event) {
      console.log('clicked');
      console.log('this');
      console.log(row, column, event);
      console.log(event.target.innerHTML);
      var dataset = event.target.innerHTML;
      console.log(dataset);
      if (column === 0) {
        this.props.actions.DatasetsActions.setSelectedDataset(dataset);
      }
    }
    //------------------------------------------------------------------------------------------------

  }, {
    key: 'getFile',
    value: function getFile(owner, id, name, token) {
      console.log('getting file' + name);
      if (this.props.downloadedDatasets.indexOf(name) < 0) {
        this.props.actions.DatasetsActions.setDownloadedDatasets(id, name);
      }
      _axios2.default.get('http://localhost:8080/downloadDatasets', { params: { owner: owner, projectID: id, file: name, at: token } }).then(function (response) {
        //this.props.actions.mainPageActions.addUserData(data.data.records);
        //-------Added---------------
        // Change the content of the file as you want
        // or either set fileContent to null to create an empty file

        //create new folder if not existent
        if (!fs.existsSync(storage)) {
          fs.mkdirSync(storage);
        }

        // The absolute path of the new file with its name
        var filepath = "mynewfile.csv";
        var path = storage + '/' + name;
        console.log('path:', path);
        fs.writeFile(path, response.data, "utf8", function (err) {
          console.log("response", response);
          if (err) {
            throw err;
          } else {
            // system notification confirming download action
            var downloadNotification = new Notification('Dataset successfully downloaded!', {
              body: 'Open in you local folder to edit.'
            });
            downloadNotification.onclick = function () {
              shell.showItemInFolder('' + path);
            };

            console.log("The file was succesfully saved locally*************!");
          }
        });
      });
    }
    //------------------------------------------------------------------------------------------------

  }, {
    key: 'sendFile',
    value: function sendFile(owner, id, name, token) {
      console.log('index of upload', this.props.downloadedDatasets.indexOf(name));

      var filePath = storage + '/' + name;

      fs.readFile(storage + '/' + name, "utf8", function (err, data) {
        console.log('data from readFile', data);

        var settings = {
          "async": true,
          "crossDomain": true,
          "url": 'https://api.data.world/v0/uploads/' + owner + '/' + id + '/files/' + name + '?expandArchive=false',
          "method": "PUT",
          "headers": {
            "authorization": 'Bearer ' + token
          },
          contentType: 'application/json',
          "data": data
        };

        _jquery2.default.ajax(settings).done(function (response) {
          console.log('response', response);
          // system notification confirming upload action
          var uploadNotification = new Notification('Successfully Uploaded!', {
            body: 'In sync with your data.world profile.'
          });
          uploadNotification.onclick = function () {
            shell.openExternal('http://data.world/' + owner + '/' + id);
          };
          console.log("The file was succesfully uploaded**********");

          fs.unlink(filePath, function (err) {
            if (err) alert('an error has occured');else {
              console.log('executed');
            }
          });
        });
      });
      if (this.props.downloadedDatasets.indexOf(name) > 0) {
        this.props.actions.DatasetsActions.removeDownloadedDataset(this.props.downloadedDatasets.indexOf(name));
      }
    }
    //------------------------------------------------------------------------------------------------

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var that = this;
      var hasUserData = Array.isArray(this.props.userData) ? this.props.userData : [];
      var tableStyles = {
        height: '500px',
        overflowY: 'auto'
      };
      var clicked = function clicked() {
        console.log('clicked');
      };

      var selectedProject = function selectedProject() {
        if (that.props.selectedProject === null) {
          console.log('running 1');
          return hasUserData;
        } else {
          console.log('running 2');
          return [hasUserData[that.props.selectedProject]];
        }
      };
      var downloaded = function downloaded(file, project) {
        if (that.props.downloadedDatasets.indexOf(file.name) < 1) {
          return _react2.default.createElement(
            _RaisedButton2.default,
            { backgroundColor: '#5dc0de', onClick: function onClick() {
                return that.getFile(project.owner, project.id, file.name, that.props.token);
              } },
            'Download'
          );
        } else {
          return null;
        }
      };

      var uploaded = function uploaded(file, project) {
        return that.props.downloadedDatasets.indexOf(file.name) > 0;
      };

      var openInFolder = function openInFolder(name) {
        require('electron').shell.showItemInFolder(storage + '/' + name);
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'table', style: tableStyles },
          _react2.default.createElement(
            _Table.Table,
            { onRowSelection: this.handleRowSelection },
            _react2.default.createElement(
              _Table.TableHeader,
              { displaySelectAll: false, adjustForCheckbox: false },
              _react2.default.createElement(
                _Table.TableRow,
                { className: 'row' },
                _react2.default.createElement(
                  _Table.TableHeaderColumn,
                  { style: { color: "black", fontWeight: "bold" } },
                  'Name'
                ),
                _react2.default.createElement(
                  _Table.TableHeaderColumn,
                  { style: { color: "black", fontWeight: "bold" } },
                  'Project'
                ),
                _react2.default.createElement(
                  _Table.TableHeaderColumn,
                  { style: { color: "black", fontWeight: "bold" } },
                  'Size'
                ),
                _react2.default.createElement(
                  _Table.TableHeaderColumn,
                  { style: { color: "black", fontWeight: "bold" } },
                  'Download'
                ),
                _react2.default.createElement(
                  _Table.TableHeaderColumn,
                  { style: { color: "black", fontWeight: "bold" } },
                  'Upload'
                ),
                _react2.default.createElement(
                  _Table.TableHeaderColumn,
                  { style: { color: "black", fontWeight: "bold" } },
                  'Show in Finder'
                )
              )
            ),
            _react2.default.createElement(
              _Table.TableBody,
              { displayRowCheckbox: false },
              selectedProject().map(function (project, index) {
                return project.files.map(function (file, index2) {
                  return _react2.default.createElement(
                    _Table.TableRow,
                    { className: 'row' },
                    _react2.default.createElement(
                      _Table.TableRowColumn,
                      { style: { color: "black" } },
                      file.name
                    ),
                    _react2.default.createElement(
                      _Table.TableRowColumn,
                      { style: { color: "black" } },
                      project.title
                    ),
                    _react2.default.createElement(
                      _Table.TableRowColumn,
                      { style: { color: "black" } },
                      file.sizeInBytes / 1000 > 1000 ? Math.floor(file.sizeInBytes / 1000) / 1000 + ' MB' : Math.floor(file.sizeInBytes / 10) / 100 + ' KB'
                    ),
                    _react2.default.createElement(
                      _Table.TableRowColumn,
                      null,
                      downloaded(file, project)
                    ),
                    _react2.default.createElement(
                      _Table.TableRowColumn,
                      null,
                      uploaded(file, project) ? _react2.default.createElement(
                        _RaisedButton2.default,
                        { backgroundColor: '#5dc0de', className: 'uploadDownloadBtn', onClick: function onClick() {
                            return _this2.sendFile(project.owner, project.id, file.name, _this2.props.token, index, index2);
                          } },
                        'Upload'
                      ) : null
                    ),
                    _react2.default.createElement(
                      _Table.TableRowColumn,
                      null,
                      uploaded(file, project) ? _react2.default.createElement(
                        _RaisedButton2.default,
                        { backgroundColor: '#f7f7f7', onClick: function onClick() {
                            return openInFolder(file.name);
                          } },
                        'Show'
                      ) : null
                    )
                  );
                });
              })
            )
          )
        )
      );
    }
  }]);
  return Datasets;
}(_react.Component);

exports.default = Datasets;