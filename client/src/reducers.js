import { combineReducers } from 'redux';
// import actions here
import { CHANGE_DISPLAYED_PLAYERS, SELECT_TEAM, REQUEST_PLAYERS, RECEIVE_PLAYERS, SET_CONTAINER_SIZE } from './actions.js';

const displayedPlayers = (state = {team: 'Arizona Cardinals', position: 'QB'}, action) => {
  switch (action.type) {
    case CHANGE_DISPLAYED_PLAYERS:
      return {
        ...state,
        team: action.team,
        position: action.position
      };
    default:
      return state;
  }
}

const allPlayers = (state = {players: null, isFetching: false}, action) => {
  switch (action.type) {
    case REQUEST_PLAYERS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_PLAYERS:
      return {
        ...state,
        players: action.players,
        isFetching: false
      }
    default:
      return state;
  }
}

const barChart = (state = {margin: null, width: 800, height: 500}, action) => {
  switch (action.type) {
    case SET_CONTAINER_SIZE: 
      return {
        ...state,
        margin: action.margin,
        width: action.width,
        height: action.height
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  // add reducers here
  allPlayers,
  displayedPlayers,
  barChart
})

export default rootReducer;