import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import AppHeader from './AppHeader.js';
import FilterableNoteTable from './FilterableNoteTable.js';

import { Notes } from '../api/notes.js';


class App extends Component {
  render() {
    return (
      <div id={'app-div'}>
        <AppHeader />
        <FilterableNoteTable
          notes={this.props.notes}
        />
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    notes: Notes.find({}, { sort: { date: -1 } }).fetch()
  };
})(App);
