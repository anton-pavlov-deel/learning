import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class FilterableNoteTable extends Component {
  render() {
    const filterService = this.props.filterService;
    const filterProvidedBy = this.props.filterProvidedBy;
    const filterProvidedTo = this.props.filterProvidedTo;
    const filterPrice = this.props.filterPrice;
    const filterDate = this.props.filterDate;
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
      <table id='filterable-note-table' cellSpacing='0'>
        <thead>
          <tr>
            <th>Service</th>
            <th>Provided by</th>
            <th>Provided to</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}


class NoteRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.note.service}</td>
        <td>{this.props.note.providedBy}</td>
        <td>{this.props.note.providedTo}</td>
        <td>{this.props.note.price}</td>
        <td>{this.props.note.date}</td>
      </tr>
    );
  }
}
