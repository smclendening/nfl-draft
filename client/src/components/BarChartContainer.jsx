import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarChart from './BarChart.jsx';
import { select as d3Select } from 'd3-selection';


export class BarChartContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { margin, width, height } = this.props;

    d3Select('.barChart').append('text')
      .attr('x', width / 2)
      .attr('y', (0 - margin.top) / 2 + 120)
      .attr('class', 'chartTitle')
      .attr('text-anchor', 'middle')
      .attr('font-size', 150)
      .text('40-yard dash');
  }

  render() {
    const { size } = this.props;

    return (
      <svg width={size.width} height={size.height} className="barChart">
        <BarChart/>
      </svg>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    size: state.barChart,
    margin: state.barChart.margin,
    width: state.barChart.width,
    height: state.barChart.height
  }
}

export default connect(mapStateToProps)(BarChartContainer);