import axios from 'axios';

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

export const fetchPlayers = (team, position) => {
  const config = {
    team, 
    position
  }

  return dispatch => {
    dispatch(requestPlayers(team, position));
    return axios.get('players', {params: config})
      .then(players => dispatch(receivePlayers(players)))
  }
}