import { combineReducers } from 'redux';
// import actions here
import { SELECT_TEAM, REQUEST_PLAYERS, RECEIVE_PLAYERS } from './actions.js';

const currentTeam = (state = {team: null}, action) => {
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
  position: 'QB'
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

const rootReducer = combineReducers({
  // add reducers here
  currentTeam,
  allPlayers,
  displayedPlayers
})

export default rootReducer;