import axios from 'axios';

export const REQUEST_PLAYERS = 'REQUEST_PLAYERS';
export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';
export const SET_CONTAINER_SIZE = 'SET_CONTAINER_SIZE';
export const CHANGE_DISPLAYED_PLAYERS = 'CHANGE_DISPLAYED_PLAYERS';

const requestPlayers = (team, position) => (
  {
    type: REQUEST_PLAYERS,
    team,
    position
  }
)

const receivePlayers = (players) => (
  {
    type: RECEIVE_PLAYERS,
    players
  }
)

export const changeDisplayedPlayers = (team, position, workout) => (
  {
    type: CHANGE_DISPLAYED_PLAYERS,
    team,
    position,
    workout
  }
)

export const fetchPlayers = (team, position) => {
  const config = {
    team, 
    position
  }

  return dispatch => {
    dispatch(requestPlayers(team, position));
    return axios.get('players', {params: config})
      .then(players => dispatch(receivePlayers(players.data)))
  }
}

export const setContainerSize = (margin, width, height) => {
  return {
      type: SET_CONTAINER_SIZE,
      margin,
      width,
      height
    }
}