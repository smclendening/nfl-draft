import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDisplayedPlayers } from '../actions.js';
import { allTeams, allPositions } from '../utils.js';


const labelStyle = { width: '200px', float: 'left', margin: '0 5px 20px' };
const spanStyle = { display: 'block', margin: '0 0 3px', font: 'Verdana', 'fontSize': '14px' };
const inputStyle = { width: '160px', padding: '2px', height: '30px' };
const buttonStyle = { 'margin-top': '15px' };

export class ChartOptions extends Component {

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
        <label style={labelStyle}>
          <span style={spanStyle}>Team:</span>
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

        <label style={labelStyle}>
          <span style={spanStyle}>Position:</span>
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

        <div style={buttonStyle}>
          <button 
            style={ {'background-color': '#820606'}}
            className="ui black button"
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

export default connect(mapStateToProps, mapDispatchToProps)(ChartOptions)
