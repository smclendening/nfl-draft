import React, { Component, PropTypes } from 'react';

import Nav from './Nav.jsx';
import ChartContainer from './ChartContainer.jsx';

const gridStyle = {
  marginTop: '64px'
}

const App = () => (
  <div>
    <Nav />
    <div style={gridStyle}>
      <ChartContainer />
    </div>
  </div>
)

export default App;