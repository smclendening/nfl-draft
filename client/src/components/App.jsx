import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component, PropTypes } from 'react';

import Nav from './Nav.jsx';
import ChartContainer from './ChartContainer.jsx';
injectTapEventPlugin();

const App = () => (
  <div>
    <Nav />
    <ChartContainer />
  </div>
)

export default App;