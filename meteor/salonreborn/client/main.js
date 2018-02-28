import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM, { render } from 'react-dom';

import App from '../imports/ui/App.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('app-holder'));
});
