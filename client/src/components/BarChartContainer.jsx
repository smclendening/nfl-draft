import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarChart from './BarChart.jsx';

const devMargins = { top: 50, right: 20, bottom: 100, left: 60 };
const devDimensions = { width: 800, height: 500 };

export default class BarChartContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <svg width={devDimensions.width} height={devDimensions.height}>
        <BarChart/>
      </svg>
    )
  }
}


