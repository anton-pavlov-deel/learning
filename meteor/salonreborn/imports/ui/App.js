import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import Dispatcher from '../api/dispatcher.js';
import AppHeader from './AppHeader.js';
import EmployeeInfoPanel from './EmployeeInfoPanel.js';

import { Employees } from '../api/employees.js';

class App extends Component {
  constructor(props) {
    super(props)

    Dispatcher.register(action => {
      switch(action.actionType) {
        case 'ADD_EMPLOYEE':
          Meteor.call('employees.insert', action.payload);
          break;
      }
    });
  }

  render() {
    return (
      <div id='app-div'>
        <AppHeader />
        <EmployeeInfoPanel employees={this.props.employees}/>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('employees');

  return ({
    employees: Employees.find({}).fetch()
  });
})(App);
