import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allTeams, allPositions } from '../utils.js';


const labelStyle = { width: '200px', float: 'left', margin: '0 20px 20px' };
const spanStyle = { display: 'block', margin: '0 0 3px', font: 'Verdana', 'fontSize': '14px' };
const inputStyle = { width: '200px', padding: '5px', height: '30px' };

export default ({ props }) => (
  <div
    className="ui one column stackable center aligned page grid"
    style={{ marginTop: '5px' }}
  >
    <label style={labelStyle}>
      <span style={spanStyle}>Workout/Attribute:</span>
      <select
        className="ui fluid search dropdown"
        style={inputStyle}
        // TODO: add onChange event to each select
      >
        <option className="item" value="forty_yd">40-Yard Dash</option>
        <option className="item" value="vertical">Vertical Jump</option>
        <option className="item" value="bench_reps">Bench Press</option>
        <option className="item" value="cone">Three-Cone</option>
        <option className="item" value="shuttle">Shuttle Run</option>
        <option className="item" value="vertical">Vertical</option>
        <option className="item" value="height">Height</option>
        <option className="item" value="weight">Weight</option>
      </select>
    </label>

    <label style={labelStyle}>
      <span style={spanStyle}>Team:</span>
      <select
        className="ui fluid search dropdown"
        style={inputStyle}
      >
        {allTeams.map(team => (
          <option className="item" value={team}>{team}</option>
        ))}
      </select>
    </label>

    <label style={labelStyle}>
      <span style={spanStyle}>Position:</span>
      <select
        className="ui fluid search dropdown"
        style={inputStyle}
      >
        {allPositions.map(position => (
          <option className="item" value={position}>{position}</option>
        ))}
      </select>
    </label>
  </div>
)
