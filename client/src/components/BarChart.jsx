import React, { Component } from 'react';
import { connect } from 'react-redux';
import { scaleBand, scaleLinear } from 'd3-scale';
import Axes from './Axes.jsx';
import Bars from './Bars.jsx';

//const margin = { top: 50, right: 20, bottom: 100, left: 60 };
const devDimensions = { width: 800, height: 500 };

const minValues = {
  'forty_yd': 5.2
}

const maxValues = {
  'forty_yd': 4.2
}

export class BarChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { players, margin, width, height } = this.props;

    const xScale = scaleBand()
      .padding(0.5)
      .domain(players.map(player => `${player.name} (${player.year} - Rd ${player.round})`))
      .range([margin.left, width - margin.right])

    const yScale = scaleLinear()
      // TODO: make minValue and maxValue dynamic based on currently selected field
      .domain([minValues.forty_yd, maxValues.forty_yd])
      .range([height - margin.bottom, margin.top]) 

    return (
      // return bar chart here
      <g>
        <Axes
          scales={{ xScale, yScale }}
          margins={margin}
          svgDimensions={{ width, height}}
        />

        <Bars
          scales={{ xScale, yScale }}
          margins={margin}
          players={players}
          maxValue={maxValues.forty_yd}
          svgDimensions={{ width, height }}
        />
      </g>
    )   
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.allPlayers.players,
    margin: state.barChart.margin,
    width: state.barChart.width,
    height: state.barChart.height
  }
}

export default connect(mapStateToProps)(BarChart);