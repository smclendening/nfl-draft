import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers, setContainerSize } from '../actions.js';
import BarChartContainer from './BarChartContainer.jsx';

export class ChartHome extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { getPlayers, team, position, setContainerSize } = this.props;
    getPlayers(team, position);

    const margin = { top: 20, right: 20, bottom: 30, left: 70 };
    const width = this.refs.container.offsetWidth - 70 - margin.top - margin.bottom;
    const height = 500 - margin.top - margin.bottom;

    setContainerSize(margin, width, height);
  }

  render() {
    const { players, margin } = this.props;

    const barChartContainer = (
      <BarChartContainer players={players} />
    )

    const loadingChart = (
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading Player Data Chart</div>
      </div>
    )
    
    return (
      <div className="ui container segment" ref="container">
        {players && margin ? barChartContainer : loadingChart}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    team: state.displayedPlayers.team,
    position: state.displayedPlayers.position,
    workout: state.displayedPlayers.workout,
    players: state.allPlayers.players,
    margin: state.barChart.margin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlayers: (team, position) => dispatch(fetchPlayers(team, position)),
    setContainerSize: (margin, width, height) => dispatch(setContainerSize(margin, width, height))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartHome)