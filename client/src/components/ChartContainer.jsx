import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions.js';
import BarChart from './BarChart.jsx';

export class ChartContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { getPlayers, currentTeam } = this.props;
    getPlayers(currentTeam.team, currentTeam.position);
  }

  render() {
    const { players } = this.props;

    const barChart = (
      <div className="ui container segment">
        <BarChart players={players} />
      </div>
    )

    const loadingChart = (
      <div className="ui segment loading">
      </div>
    )

    return players ? barChart : loadingChart;
  }
}

const mapStateToProps = (state) => {
  return {
    currentTeam: state.currentTeam,
    players: state.displayedPlayers.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlayers: (team, position) => dispatch(fetchPlayers(team, position))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer)