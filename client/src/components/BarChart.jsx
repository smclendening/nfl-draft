import React, { Component } from 'react';
import { connect } from 'react-redux';
import { scaleBand, scaleLinear } from 'd3-scale';
import Axes from './Axes.jsx';
import Bars from './Bars.jsx';

const devMargins = { top: 50, right: 20, bottom: 100, left: 60 };
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
    const { players } = this.props;

    const xScale = scaleBand()
      .padding(0.5)
      .domain(players.map(player => `${player.name} (${player.year} - Rd ${player.round})`))
      .range([devMargins.left, devDimensions.width - devMargins.right])

    const yScale = scaleLinear()
      .domain([minValues.forty_yd, maxValues.forty_yd])
      .range([devDimensions.height - devMargins.bottom, devMargins.top]) 

    return (
      // return bar chart here
      <Axes
        scales={{ xScale, yScale }}
        margins={devMargins}
        svgDimensions={devDimensions}
      />

      <Bars
        scales={{ xScale, yScale }}
        margins={devMargins}
        players={players}
        maxValue={maxValues.forty_yd}
        svgDimensions={devDimensions}
      />
    )   
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.displayedPlayers.players
  }
}

export default connect(mapStateToProps)(BarChart);