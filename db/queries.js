const knex = require('./config.js');

const getPlayers = (team, position) => {
  return knex('players').where({team, position});
}


module.exports = {
  getPlayers: getPlayers
};