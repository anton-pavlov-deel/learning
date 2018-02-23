import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './AppHeader.js';
import FilterableNoteTable from './FilterableNoteTable.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterService: '',
      filterProvidedBy: '',
      filterProvidedTo: '',
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
        <AppHeader onFilterChange={this.handleFilterChange.bind(this)}/>
        <hr />
        <FilterableNoteTable
          notes={this.props.notes}
          filterService={this.state.filterService}
          filterProvidedBy={this.state.filterProvidedBy}
          filterProvidedTo={this.state.filterProvidedTo}
          filterPrice={this.state.filterPrice}
          filterDate={this.state.filterDate}
        />
      </div>
    );
  }
}
