import React, { Component } from 'react';
import * as d3Axis from 'd3-axis';
import { select as d3Select } from 'd3-selection';

export default class Axis extends Component { 

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const { scale, tickSize, orient } = this.props;
    const axisType = `axis${orient}`;

    const axis = d3Axis[axisType]()
      .scale(scale)
      .tickSize(-tickSize)
      .tickPadding([12])
      .ticks(5)

    // TODO: remove ticks from x-axis
    d3Select(this.axisElement).call(axis)
  }

  render() {
    const { orient, translate } = this.props;

    return (
      <g
        className={`Axis-${orient}`}
        ref={(el) => { this.axisElement = el; }}
        transform={ translate } 
      />
    )
  }
}