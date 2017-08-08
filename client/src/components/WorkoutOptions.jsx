import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allWorkouts } from '../utils.js';

class WorkoutOptions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentWorkout } = this.props;

    return (
      <div className="ui seven item menu">
        {Object.keys(allWorkouts).map(workout => (
          <a className={workout === currentWorkout ? "active item" : "item"}>
            {allWorkouts[workout].name}
          </a>)
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentWorkout: state.displayedPlayers.workout
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutOptions);