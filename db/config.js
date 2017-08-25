const knex = require('./knexfile.js');

const env = process.env.NODE_ENV || 'development';

const connection = knex[env].connection;

const db = require('knex')({
  client: 'pg',
  connection, 
  pool: {
    afterCreate: (conn, done) => {
      console.log('hmm are we in here');
      conn.query('SET timezone="UTC";', err => {
        if (err) {
          done(err, conn);
        } else {
            done(err, conn);
        }
      })
    }
  }
})

module.exports = db;
