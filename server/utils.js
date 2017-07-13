const request = require('request');
const cheerio = require('cheerio');

const rp = require('request-promise');



const findPlayers = () => {
  const url = 'http://www.pro-football-reference.com/draft/2016-combine.htm';
  const array = [];

  const options = {
    uri: url,
    transform: function (body) {
        return cheerio.load(body);
    }
  };

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
              //height: $(this).find('[data-stat="height"]').text(),
              height: Number(heightString.split('-')[0]) * 12 + Number(heightString.split('-')[1]),
              weight: Number($(this).find('[data-stat="weight"]').text()),
              forty_yd: Number($(this).find('[data-stat="forty_yd"]').text()), 
              vertical: Number($(this).find('[data-stat="vertical"]').text()),   
              bench_reps: Number($(this).find('[data-stat="bench_reps"]').text()),        
              cone: Number($(this).find('[data-stat="cone"]').text()),
              shuttle: Number($(this).find('[data-stat="shuttle"]').text()),
              team: $(this).find('[data-stat="draft_info"]').text().split('/')[0],
              round: $(this).find('[data-stat="draft_info"]').text().split('/')[1]
            }

            if (playerObj.team === '') {
              playerObj.team = 'Undrafted';
            }

            if (playerObj.round) {
              playerObj.round = Number(playerObj.round[1]);
            } else {
              playerObj.round = 8;
              // if player was undrafted, set round to 8
            }

            //console.log('player: ', playerObj);
            array.push(playerObj);
          } else {
            console.log('CURIOUS');
          }
        })
      })
    })
    .then(() => {
      //console.log(array);
      return array;
 // return array;
    });
}

module.exports = {
  findPlayers: findPlayers
}