import fetch from 'isomorphic-fetch';

export const REQUEST_PLAYERS = 'REQUEST_PLAYERS';
export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';

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

export const fetchPlayers = (team) => {
  return dispatch => {
    dispatch(requestPlayers(team, position));
    return fetch('/players')
      .then(response => response.json())
      .then(json => dispatch(receivePlayers(json)))
  }
}