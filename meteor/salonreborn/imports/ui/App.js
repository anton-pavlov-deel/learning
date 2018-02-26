import Meteor from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Dispatcher from '../api/dispatcher.js';
import Actions from '../api/actions.js'

export default class App extends Component {
  render() {
    return (
      <div id='app-div'>
      </div>
    );
  }
}
