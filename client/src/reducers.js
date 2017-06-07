import { combineReducers } from 'redux';
// import actions here

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

const allPlayers = (state = {players: null}, action) => {
  switch (action.type) {
    case RECEIVED_PLAYERS:
      return {
        ...state,
        players: action.players
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
    case RECEIVED_PLAYERS:
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