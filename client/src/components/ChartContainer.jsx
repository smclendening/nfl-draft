import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions.js';

export class ChartContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getPlayers } = this.props;
    getPlayers();
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
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlayers: () => dispatch(fetchPlayers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer)