import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ToolBar extends Component {
  render() {
    return (
      <div id='tool-bar-div'>
        <SearchBar onFilterChange={this.props.onFilterChange}/>
      </div>
    );
  }
}

class SearchBar extends Component {
  handleFilterChange(event) {
    this.props.onFilterChange(event.target);
  }

  render() {
    return (
      <div id="search-bar-div">
        <h3>Search tool</h3>
        <label>Service: <input
          type='text'
          name='filterService'
          onChange={this.handleFilterChange.bind(this)}
        /></label><br />
        <label>Provided by: <input
          type='text'
          name='filterProvidedBy'
          onChange={this.handleFilterChange.bind(this)}
        /></label><br />
        <label>Provided to: <input
          type='text'
          name='filterProvidedTo'
          onChange={this.handleFilterChange.bind(this)}
        /></label><br />
        <label>Clear price: <input
          type='text'
          name='filterClearPrice'
          onChange={this.handleFilterChange.bind(this)}
        /></label><br />
        <label>Price: <input
          type='text'
          name='filterPrice'
          onChange={this.handleFilterChange.bind(this)}
        /></label><br />
        <label>Date: <input
          type='text'
          name='filterDate'
          onChange={this.handleFilterChange.bind(this)}
        /></label>
      </div>
    );
  }
}
