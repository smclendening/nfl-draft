const knex = require('./knexfile.js');

const env = process.env.NODE_ENV || 'development';

const db = require('knex')({
  client: 'pg',
  connection: knex[env].connection,
  pool: {
    afterCreate: (conn, done) => {
      console.log('hmm are we in here');
      conn.query('SET timezone="UTC";', err => {
        if (err) {
          done(err, conn);
        } else {
         // conn.query('SELECT set_limit(0.01);', err => {
         // set_limit now deprecated
            done(err, conn);
          //})
        }
      })
    }
  }
})

module.exports = db;

// const db = pgp('postgres://localhost:5432/nfldraft');

// module.exports = db.connect()
//     .then(obj => {
//       console.log('successfully connected');
//         obj.done(); // success, release the connection;
//     })
//     .catch(error => {
//         console.log('ERROR:', error.message || error);
//     });

