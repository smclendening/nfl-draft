import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions.js';
import BarChartContainer from './BarChartContainer.jsx';

export class ChartHome extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { getPlayers, currentTeam } = this.props;
    getPlayers(currentTeam.team, currentTeam.position);

    // get size here
    // getContainerSize();
  }

  render() {
    const { players } = this.props;

    const barChartContainer = (
      <div className="ui container segment">
        <BarChartContainer players={players} />
      </div>
    )

    const loadingChart = (
      <div className="ui segment loading">
      </div>
    )

    return players ? barChartContainer : loadingChart;
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

export default connect(mapStateToProps, mapDispatchToProps)(ChartHome)