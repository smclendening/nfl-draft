const express = require('express');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

const dummyData = require('./dummydata.js');

app.use(express.static(path.resolve(__dirname + '/../client/public')))

app.get('/players', (req, res) => {
  const url = 'http://www.pro-football-reference.com/draft/2016-combine.htm';

  request(url, (err, response, html) => {
    if (!err) {
      const $ = cheerio.load(html);

      $('tbody').filter(function() {
        const players = $(this).children();

        $(players).each(function(player) {
          
          const playerObj = {
            name: $(this).children().first().text(),
            position: $(this).find('[data-stat="pos"]').text(),
            college: $(this).find('[data-stat="school_name"]').find('a').text(),
            height: $(this).find('[data-stat="height"]').text(),
            weight: $(this).find('[data-stat="weight"]').text(),
            forty_yd: $(this).find('[data-stat="forty_yd"]').text(), 
            vertical: $(this).find('[data-stat="vertical"]').text(),   
            bench_reps: $(this).find('[data-stat="bench_reps"]').text(),        
            cone: $(this).find('[data-stat="cone"]').text(),
            shuttle: $(this).find('[data-stat="shuttle"]').text(),
            team: $(this).find('[data-stat="draft_info"]').text().split('/')[0],
            round: $(this).find('[data-stat="draft_info"]').text().split('/')[1]
          }

          if (playerObj.team === '') {
            playerObj.team = 'Undrafted';
          }



          console.log('player: ', playerObj);
        })
      })
    }
  })

  res.end(JSON.stringify('hello'));
})

app.listen(8080, () => {
  console.log('dir', __dirname);
});