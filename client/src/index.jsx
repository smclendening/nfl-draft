import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import ChartContainer from './components/ChartContainer.jsx';

const Root = () => (
  <div>
    <Nav/>
    <ChartContainer />
  </div>
)

ReactDOM.render(<Root />, document.getElementById('app'));