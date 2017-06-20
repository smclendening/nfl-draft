const pgp = require('pg-promise')();

const db = pgp('postgres://localhost:5432/nfldraft');

module.exports = db.connect()
    .then(obj => {
      console.log('successfully connected');
        obj.done(); // success, release the connection;
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });