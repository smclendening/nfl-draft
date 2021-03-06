const express = require('express');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

const db = require('../db/queries.js');
const utils = require('./utils.js');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname + '/../client/public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/players', (req, res) => {
  db.getPlayers(req.query.team, req.query.position)
  .then(players => {
    res.end(JSON.stringify(players));
  })
  .catch(err => {
    console.log('error fetching players', err);
  })
})

app.listen(port, () => {
  console.log('dir', __dirname);
});