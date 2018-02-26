import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM, { render } from 'react-dom';

import App from '../imports/ui/App.js';

items = [
  {_id: '1', text: 'Hello, World!'},
  {_id: '2', text: 'Alevtina'},
  {_id: '3', text: 'Anton'},
  {_id: '4', text: 'Moscow State University'}
];

Meteor.startup(() => {
  render(<App items={items}/>, document.getElementById('app-holder'));
});
