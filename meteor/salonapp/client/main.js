import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import App from '../imports/ui/App.js';

function FormatDate(date) {
  return `${date.toLocaleDateString()}-${date.toLocaleTimeString()}`;
}

notes = [
  {_id: 1, service:'service1', providedBy:'employee1', providedTo:'client1', price:'price1', date: FormatDate(new Date()) },
  {_id: 2, service:'service2', providedBy:'employee2', providedTo:'client2', price:'price2', date: FormatDate(new Date()) },
  {_id: 3, service:'service3', providedBy:'employee3', providedTo:'client3', price:'price3', date: FormatDate(new Date()) }
];

Meteor.startup(() => {
  render(<App />, document.getElementById('app-holder'));
});
