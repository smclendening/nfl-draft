import React, { Component, PropTypes } from 'react';

import Nav from './Nav.jsx';
import ChartHome from './BarChart/ChartHome.jsx';

const gridStyle = {
  marginTop: '64px'
}

const App = () => (
  <div>
    <Nav />
    <div style={gridStyle}>
      <ChartHome />
    </div>
  </div>
)

export default App;