import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ToolBar from './ToolBar.js';

logo_path = '/home/antonpavlov/learning/meteor/salonapp/resources/logo.png';

class LogoBar extends Component {
  render() {
    return (
      <div id='logo-bar-div'>
        <img src={this.props.src} />
      </div>
    );
  }
}

class AuthorizationBar extends Component {
  render() {
    return (
      <div id='authorization-bar-div'>

      </div>
    );
  }
}

export default class AppHeader extends Component {
  render() {
    return (
      <div id='app-header-div'>
        <LogoBar src={logo_path} />
        <AuthorizationBar />
        <ToolBar onFilterChange={this.props.onFilterChange}/>
      </div>
    );
  }
}
