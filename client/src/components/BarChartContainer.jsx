import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarChart from './BarChart.jsx';


export class BarChartContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { size } = this.props;

    return (
      <svg width={size.width} height={size.height}>
        <BarChart/>
      </svg>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    size: state.barChart
  }
}

export default connect(mapStateToProps)(BarChartContainer);