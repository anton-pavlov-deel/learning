import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Notes = new Mongo.Collection('notes');

Meteor.methods({
  'notes.insert'(note) {
    Notes.insert(note);
  }
})
