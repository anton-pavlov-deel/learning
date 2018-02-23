import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ToolBar extends Component {
  render() {
    return (
      <div id='tool-bar-div'>
        <SearchBar
          onFilterChange={this.props.onFilterChange}
        />
        <AddNoteTool />
      </div>
    );
  }
}

class SearchBar extends Component {
  handleFilterChange(event) {
    console.log(event.target.value);
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

class AddNoteTool extends Component {
  constructor(props) {
    super(props);

    this.state = {
      service: '',
      providedBy: '',
      providedTo: '',
      clearPrice: '',
      price: '',
      date: ''
    };
  }

  handleChange(event) {

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    date = new Date();

    date = `${date.toLocaleDateString()}-${date.toLocaleTimeString()}`;

    this.setState({
      date: date
    })

    Meteor.call('notes.insert', this.state);
  }

  render() {
    return (
      <form id="add-note-tool-form" onSubmit={this.handleSubmit.bind(this)}>
        <h3>Add note tool</h3>
        <label>Service: <input
          type='text'
          name='service'
          onChange={this.handleChange.bind(this)}
          required
        /></label><br />
        <label>Provided by: <input
          type='text'
          name='providedBy'
          onChange={this.handleChange.bind(this)}
          required
        /></label><br />
        <label>Provided to: <input
          type='text'
          name='providedTo'
          onChange={this.handleChange.bind(this)}
          required
        /></label><br />
        <label>Clear price: <input
          type='text'
          name='clearPrice'
          onChange={this.handleChange.bind(this)}
          required
        /></label><br />
        <label>Price: <input
          type='text'
          name='price'
          onChange={this.handleChange.bind(this)}
          required
        /></label><br /><br />
        <input type='submit' name='Submit' value='Add note'/>
      </form>
    );
  }
}
