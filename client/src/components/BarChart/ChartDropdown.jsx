import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDisplayedPlayers } from '../actions.js';
import { allTeams, allPositions } from '../utils.js';


const inputStyle = { width: '160px', padding: '2px', height: '30px' };
const buttonDivStyle = { 'marginTop': '15px' };
const buttonStyle = {'backgroundColor': '#820606', color: 'white'};

export class ChartDropdown extends Component {

  constructor() {
    super();
    this.state = {
      team: 'Arizona Cardinals',
      position: 'QB'
    }
  }

  render() {

    const { team, position } = this.state;
    const { changeDisplayedPlayers } = this.props;

    return (
      <div
        className="ui one column stackable center aligned page grid"
        style={{ marginTop: '5px' }}
      >
        <label className="chart-label">
          <span className="span-label">Team:</span>
          <select
            className="ui fluid search dropdown"
            style={inputStyle}
            onChange={(e) => this.setState({team: e.target.value})}
          >
            {allTeams.map(team => (
              <option className="item" key={team} value={team}>{team}</option>
            ))}
          </select>
        </label>

        <label className="chart-label">
          <span className="span-label">Position:</span>
          <select
            className="ui fluid search dropdown"
            style={inputStyle}
            onChange={(e) => this.setState({position: e.target.value})}
          >
            {allPositions.map(position => (
              <option className="item" key={position} value={position}>{position}</option>
            ))}
          </select>
        </label>

        <div style={buttonDivStyle}>
          <button 
            style={buttonStyle}
            className="ui button"
            onClick={() => {
              changeDisplayedPlayers(team, position)
            }}>
            Get Player Data
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDisplayedPlayers: (team, position) => dispatch(changeDisplayedPlayers(team, position))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartDropdown)
