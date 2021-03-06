import React, { Component } from 'react';
import { connect } from 'react-redux';
import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';

class Bars extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { scales, margins, players, svgDimensions, workout } = this.props;
    const { xScale, yScale } = scales;
    const { height } = svgDimensions;

    const bars = (
      players.map(player => 
        <rect  
          key={player.id}
          x={xScale(`${player.name} (${player.year} - R${player.round})`)}
          y={yScale(player[workout])}
          height={player[workout] !== '0.00' ? height - margins.bottom - scales.yScale(player[workout]) : 0}
          width={xScale.bandwidth()}
          fill={'#820606'}
        />
      )
    )

    return (
      <g>{bars}</g>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    workout: state.displayedPlayers.workout
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Bars);
