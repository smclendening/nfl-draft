import React, { Component, PropTypes } from 'react';

import Nav from './Nav.jsx';
import ChartHome from './BarChart/ChartHome.jsx';


const App = () => (
  <div>
    <Nav />
    <div className="ChartHome">
      <ChartHome />
    </div>
  </div>
)

export default App;