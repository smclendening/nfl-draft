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
    const axisType = `axis${this.props.orient}`;
    const { scale, tickSize } = this.props;

    const axis = d3Axis[axisType]()
      .scale(scale)
      .tickSize(-tickSize)
      .tickPadding([12])
      .ticks([4])

    d3Select(this.axisElement).call(axis)
  }

  render() {
    const { orient, translate } = this.props;

    return (
      <g
        className={`Axis Axis-${this.props.orient}`}
        ref={el => { this.axisElement = el; }}
        transform={ translate } 
      />
    )
  }
}