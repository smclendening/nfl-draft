const express = require('express');
const path = require('path');
const app = express();

const dummyData = require('./dummydata.js');

app.use(express.static(path.resolve(__dirname + '/../client/public')))

app.get('/players', (req, res) => {
  res.json(dummyData);
})

app.listen(8080, () => {
  console.log('dir', __dirname);
});