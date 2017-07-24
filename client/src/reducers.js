import { combineReducers } from 'redux';
// import actions here
import { SELECT_TEAM, REQUEST_PLAYERS, RECEIVE_PLAYERS, SET_CONTAINER_SIZE } from './actions.js';

const currentTeam = (state = {team: 'Green Bay Packers', position: 'WR', year: ''}, action) => {
  switch (action.type) {
    case SELECT_TEAM:
      return {
        ...state,
        team: action.team
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

const displayedPlayers = (state = {
  players: null,
  position: 'WR'
}, action) => {
  switch (action.type) {
    case RECEIVE_PLAYERS:
      return {
        ...state,
        players: action.players // TODO: filter by current position here 
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
  currentTeam,
  allPlayers,
  displayedPlayers,
  barChart
})

export default rootReducer;