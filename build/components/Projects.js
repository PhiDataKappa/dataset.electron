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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Projects = function (_Component) {
  (0, _inherits3.default)(Projects, _Component);

  function Projects(props) {
    (0, _classCallCheck3.default)(this, Projects);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Projects.__proto__ || (0, _getPrototypeOf2.default)(Projects)).call(this, props));

    console.log('props in projects', props);
    //console.log('this.props in projects', this.props)
    return _this;
  }

  (0, _createClass3.default)(Projects, [{
    key: 'selectProject',
    value: function selectProject(row, column, event) {
      console.log('clicked');
      console.log('this');
      console.log(row, column, event);
      console.log(event.target.innerHTML);
      console.log(this.props.userData[row].title, 'title');
      var project = this.props.userData[row].title;
      console.log(project, 'project');

      if (column === 2) {
        console.log('switching to dataset view');
        this.props.actions.ProjectsActions.setSelectedProject(row);
        this.props.actions.MainPageActions.changeView('Datasets');
        //change view
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var hasUserData = Array.isArray(this.props.userData) ? this.props.userData : [];
      return _react2.default.createElement(
        'div',
        { className: 'table' },
        _react2.default.createElement(
          _Table.Table,
          { onRowSelection: this.handleRowSelection, onCellClick: this.selectProject.bind(this) },
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
                'Number of Files'
              ),
              _react2.default.createElement(
                _Table.TableHeaderColumn,
                { style: { color: "black", fontWeight: "bold" } },
                'Show Datasets'
              )
            )
          ),
          _react2.default.createElement(
            _Table.TableBody,
            { displayRowCheckbox: false },
            hasUserData.map(function (project, index) {
              return _react2.default.createElement(
                _Table.TableRow,
                { className: 'row' },
                _react2.default.createElement(
                  _Table.TableRowColumn,
                  { style: { color: "black" } },
                  project.title
                ),
                _react2.default.createElement(
                  _Table.TableRowColumn,
                  { style: { color: "black" } },
                  project.files.length,
                  ' Files'
                ),
                _react2.default.createElement(
                  _Table.TableRowColumn,
                  null,
                  _react2.default.createElement(
                    _RaisedButton2.default,
                    { backgroundColor: '#5dc0de' },
                    'Show'
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);
  return Projects;
}(_react.Component);

/*
export const Projects = props => {
  return (
    <div>
      <p>  projects-------------------!! </p>
    </div>
  )
}
*/


exports.default = Projects;