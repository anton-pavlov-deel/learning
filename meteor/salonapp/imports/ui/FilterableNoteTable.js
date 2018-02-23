import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ToolBar from './ToolBar.js'

export default class FilterableNoteTable extends Component {
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
    const filterService = this.state.filterService;
    const filterProvidedBy = this.state.filterProvidedBy;
    const filterProvidedTo = this.state.filterProvidedTo;
    const filterClearPrice = this.state.filterClearPrice;
    const filterPrice = this.state.filterPrice;
    const filterDate = this.state.filterDate;
    const notes = this.props.notes;
    const rows = [];

    notes.forEach(note => {
      if (note.service.indexOf(filterService) === -1) {
        return;
      }
      if (note.providedBy.indexOf(filterProvidedBy) === -1) {
        return;
      }
      if (note.providedTo.indexOf(filterProvidedTo) === -1) {
        return;
      }
      if (note.clearPrice.indexOf(filterClearPrice) === -1) {
        return;
      }
      if (note.price.indexOf(filterPrice) === -1) {
        return;
      }
      if (note.date.indexOf(filterDate) === -1) {
        return;
      }
      rows.push(
        <NoteRow note={note} key={note._id} />
      );
    });

    return (
      <div id='filterable-note-table-div'>
        <ToolBar onFilterChange={this.handleFilterChange.bind(this)}/>
        <table id='filterable-note-table' cellSpacing='0'>
          <thead>
            <tr>
              <th style={{width: '1%', cursor: 'pointer'}}></th>
              <th>Service</th>
              <th>Provided by</th>
              <th>Provided to</th>
              <th>Clear price</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}


class NoteRow extends Component {
  render() {
    return (
      <tr>
        <td></td>
        <td>{this.props.note.service}</td>
        <td>{this.props.note.providedBy}</td>
        <td>{this.props.note.providedTo}</td>
        <td>{this.props.note.clearPrice}</td>
        <td>{this.props.note.price}</td>
        <td>{this.props.note.date}</td>
      </tr>
    );
  }
}
