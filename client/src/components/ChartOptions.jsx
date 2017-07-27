import React, { Component } from 'react';
import { connect } from 'react-redux';


const labelStyle = { width: '200px', float: 'left', margin: '0 20px 20px' };
const spanStyle = { display: 'block', margin: '0 0 3px', font: 'lato', 'fontSize': '14px' };
const inputStyle = { width: '200px', padding: '5px', height: '30px' };

export default ({ props }) => (
  <div
    className="ui one column stackable center aligned page grid"
    style={{ marginTop: '5px' }}
  >
    <label style={labelStyle}>
      <span style={spanStyle}>Workout:</span>
      <select
        className="ui fluid search dropdown"
        style={inputStyle}
      >
        <option className="item" value="0">40-yard Dash</option>
        <option className="item" value="1">Bench Press</option>
      </select>
    </label>
  </div>
)