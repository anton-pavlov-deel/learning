import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AppHeader extends Component {
  render() {
    return (
      <div id='app-header-div'>
        <img src='images/logo.jpg' />
      </div>
    );
  }
}
