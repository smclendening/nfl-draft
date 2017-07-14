const express = require('express');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

const db = require('../db/config.js');
const utils = require('./utils.js');

app.use(express.static(path.resolve(__dirname + '/../client/public')));

app.get('/players', (req, res) => {
  
  res.end(JSON.stringify('hello'));
})

app.listen(8080, () => {
  console.log('dir', __dirname);
});