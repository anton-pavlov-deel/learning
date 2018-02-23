import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import AppHeader from './AppHeader.js';
import FilterableNoteTable from './FilterableNoteTable.js';

import { Notes } from '../api/notes.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterService: '',
      filterProvidedBy: '',
      filterProvidedTo: '',
      filterClearPrice: '',
      filterPrice: '',
      filterDate: ''
    }
  }

  handleFilterChange(target) {
    this.setState({
      [target.name]: target.value
    })
  }

  render() {
    return (
      <div id={'app-div'}>
        <AppHeader
          onFilterChange={this.handleFilterChange.bind(this)}
        />

        <FilterableNoteTable
          notes={this.props.notes}
          filterService={this.state.filterService}
          filterProvidedBy={this.state.filterProvidedBy}
          filterProvidedTo={this.state.filterProvidedTo}
          filterClearPrice={this.state.filterClearPrice}
          filterPrice={this.state.filterPrice}
          filterDate={this.state.filterDate}
        />
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    notes: Notes.find({}).fetch()
  };
})(App);
