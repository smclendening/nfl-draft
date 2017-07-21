import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';

export default class Bars extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { scales, margins, players, svgDimensions } = this.props;
    const { xScale, yScale } = scales;
    const { height } = svgDimensions;

    const bars = (
      players.map(player => 
        <rect  
          key={player.id}
          x={xScale(player.name)}
          y={yScale(player.forty_yd)}
          height={height - margins.bottom - scales.yScale(player.forty_yd)}
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