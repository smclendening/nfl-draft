import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarChart from './BarChart.jsx';
import ChartOptions from './ChartOptions.jsx';

export class BarChartContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { width, height } = this.props;

    return (
      <div>
        <ChartOptions />
        <svg width={width} height={height} className="barChart">
          <BarChart/>
        </svg>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    margin: state.barChart.margin,
    width: state.barChart.width,
    height: state.barChart.height
  }
}

export default connect(mapStateToProps)(BarChartContainer);