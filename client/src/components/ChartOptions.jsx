import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartDropdown from './ChartDropdown.jsx';
import WorkoutOptions from './WorkoutOptions.jsx';

export default () => (
  <div>
    <WorkoutOptions />
    <ChartDropdown />
  </div>
)
