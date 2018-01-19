import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';
import { RaisedButton, TextField, AppBar, Drawer, MenuItem, FlatButton, Divider } from 'material-ui';
import {orange500, blue500, grey400
} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import Datasets from '../containers/Datasets';
import Projects from '../containers/Projects';


export default class MainPage extends Component {
  constructor(props){
    super(props);
    console.log('props',props);
    this.state = {
      open:false,
      projects: [],
      mainview: 'Projects',
      logout:false
    }
  }
  componentDidMount() {
    console.log('in mount', this.props.token);
    if (this.props.token) {
      axios.get('http://localhost:8080/getUserDatasets', {params: {accessToken: this.props.token}})
      .then((data) => {
        this.props.actions.mainPageActions.addUserData(data.data.records);
      })
    }
  }


  logout = () => {
    this.props.actions.homePageActions.setShouldRedirect(false);
    this.setState({logout:true})
  }



  render() {
    var that = this;

    var forceNavDown = {'top': '72px'};
    var positionTitle = {'top': '-8px', 'backgroundColor': grey400, 'height':'73px'};

  var switchView = function (view) {
    console.log('view at first', view);
    console.log('running switchView');
    if (view === 'Datasets') {
      that.props.actions.ProjectsActions.setSelectedProject(null);
    }
    that.props.actions.mainPageActions.changeView(view);

  }

  var getNewFiles = function () {
    if (that.props.token) {
      axios.get('http://localhost:8080/getUserDatasets', {params: {accessToken: that.props.token}})
      .then((data) => {
        that.props.actions.mainPageActions.addUserData(data.data.records);
      })
    }
  }

  var MainView = function (view) {
    var view = that.props.mainView  || 'Projects';
    if (view === 'Projects'){
      return <Projects/>;
    } else {
      return <Datasets/>;
    }
  }

    return (
      <div style={{height: '100vh'}}>
          <AppBar title="dataset.tools" showMenuIconButton={false}  style={positionTitle} iconElementRight={<FlatButton onClick={this.logout} label="Log Out" />} />
          <div className="Container" style={{display: 'flex', 'top': '62px', height: '100%' }}>
            <div className="Sidebar" style={{flexShrink: 0, 'backgroundColor': '#333d49', width: '150px', marginTop:'-10px'}}>
              <List >
                <ListItem primaryText="Projects" onClick={() => switchView('Projects')} />
                <ListItem primaryText="Datasets" onClick={() => switchView('Datasets')}/>
                <ListItem primaryText="Sync Files" onClick={() => getNewFiles()}/>
              </List>
              <Divider />
            </div>
            <div className='mainContent' style={{flexGrow: 1, flexShrink: 1}}>
              {MainView()}
            </div>
          </div>
      {this.state.logout && (
        <Redirect to ={'/'}/>
      )}
  </div>
    );
  }
}
