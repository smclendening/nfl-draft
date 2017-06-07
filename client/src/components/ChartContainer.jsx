import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions.js';

export default class ChartContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

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
    players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlayers: () => dispatch(fetchPlayers())
  }
}

export default connect(mapStateToProps)(ChartContainer)