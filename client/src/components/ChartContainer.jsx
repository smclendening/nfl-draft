import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions.js';

export class ChartContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getPlayers, currentTeam } = this.props;
    getPlayers(currentTeam.team, currentTeam.position);
  }

  render() {
    return (
      <div>
        Chart Container
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentTeam: state.currentTeam
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlayers: (team, position) => dispatch(fetchPlayers(team, position))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer)