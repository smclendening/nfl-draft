import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions.js';

const gridStyle = {
  marginTop: '64px'
}

export class ChartContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getPlayers, currentTeam } = this.props;
    getPlayers(currentTeam.team, currentTeam.position);
  }

  render() {
    const { players } = this.props;

    return (
      <div style={gridStyle}>
        Chart Container
        {players && players.map(player => <div>{player.name}</div>)} 
      </div>
    )
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