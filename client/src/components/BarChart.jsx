import React, { Component } from 'react';
import { connect } from 'react-redux';
import { scaleBand, scaleLinear } from 'd3-scale';
import Axes from './Axes.jsx';

const devMargins = { top: 50, right: 20, bottom: 100, left: 60 };
const devDimensions = { width: 800, height: 500 };

export default class ChartContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { players } = this.props;

    const xScale = scaleBand()
      .padding(0.5)
      .domain(players.map(player => player.name))
      .range([devMargins.left, devDimensions.width - devMargins.right])

    const yScale = scaleLinear()
      .domain(players.map(player => Number(player.forty_yd)))
      .range([devDimensions.height - devMargins.bottom, devMargins.top]) 

    return (
      // return bar chart here
      <svg width={devDimensions.width} height={devDimensions.height}>
        <Axes
          scales={{ xScale, yScale }}
          margins={devMargins}
          svgDimensions={devDimensions}
        />
      </svg>
    )   
  }
}