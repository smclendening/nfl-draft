const request = require('request');
const cheerio = require('cheerio');
const rp = require('request-promise');

const urls = ['http://www.pro-football-reference.com/draft/2006-combine.htm', 'http://www.pro-football-reference.com/draft/2007-combine.htm', 'http://www.pro-football-reference.com/draft/2008-combine.htm', 'http://www.pro-football-reference.com/draft/2009-combine.htm', 'http://www.pro-football-reference.com/draft/2010-combine.htm', 'http://www.pro-football-reference.com/draft/2011-combine.htm', 'http://www.pro-football-reference.com/draft/2012-combine.htm', 'http://www.pro-football-reference.com/draft/2013-combine.htm', 'http://www.pro-football-reference.com/draft/2014-combine.htm', 'http://www.pro-football-reference.com/draft/2015-combine.htm', 'http://www.pro-football-reference.com/draft/2016-combine.htm'];


const findPlayers = () => {
  const array = [];
  const toRetrieve = [];

  const retrieveFromUrl = (url) => {
    const options = {
      uri: url,
      transform: function (body) {
          return cheerio.load(body);
      }
    };

    const year = url.split('draft/')[1].slice(0, 4);
    
    return rp(options)
      .then(($) => {
        $('tbody').filter(function() {
          const players = $(this).children();

          $(players).each(function(player) {

            if ($(this).children().first().text() !== 'Player') {
              const heightString = $(this).find('[data-stat="height"]').text();
              
              const playerObj = {
                name: $(this).children().first().text(),
                position: $(this).find('[data-stat="pos"]').text(),
                college: $(this).find('[data-stat="school_name"]').find('a').text(),
                height: Number(heightString.split('-')[0]) * 12 + Number(heightString.split('-')[1]),
                weight: Number($(this).find('[data-stat="weight"]').text()),
                forty_yd: Number($(this).find('[data-stat="forty_yd"]').text()), 
                vertical: Number($(this).find('[data-stat="vertical"]').text()),   
                bench_reps: Number($(this).find('[data-stat="bench_reps"]').text()),        
                cone: Number($(this).find('[data-stat="cone"]').text()),
                shuttle: Number($(this).find('[data-stat="shuttle"]').text()),
                team: $(this).find('[data-stat="draft_info"]').text().split('/')[0],
                round: $(this).find('[data-stat="draft_info"]').text().split('/')[1],
                year: year
              }



              if (playerObj.team === '') {
                playerObj.team = 'Undrafted';
              } else {
                // remove blank space at end of player string 
                let teamString = playerObj.team;
                teamString = teamString.split('');
                teamString.pop();
                teamString = teamString.join('');
                playerObj.team = teamString;
              }

              if (playerObj.round) {
                playerObj.round = Number(playerObj.round[1]);
              } else {
                // if player was undrafted, set round to 8 
                playerObj.round = 8;
              }
              array.push(playerObj);
            } 
          })
        })
      })
  }

  for (let i = 0; i < urls.length; i++) {
    toRetrieve.push(retrieveFromUrl(urls[i]));
  }

  return Promise.all(toRetrieve)
  .then(() => {
    return array;
  });
}

const createPlayerRecord = (knex, player) => {
  return knex('players').insert(player);
}

exports.seed = (knex, Promise) => {
  return knex('players').del()
    .then(() => {
      return findPlayers()
      .then(players => {
        let playersToInsert = [];

        for (let i = 0; i < players.length; i++) {
          playersToInsert.push(createPlayerRecord(knex, players[i]));
        }

        return Promise.all(playersToInsert);
      })
    })
}


