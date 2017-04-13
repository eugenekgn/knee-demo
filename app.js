const screen = require('./screen');
const knexConfig = require('./knex.config.js');
const knex = require('knex')(knexConfig.sqlite);

screen.clearScreen();
knex.select('title', 'rating').from('book').asCallback((err, rows) => {
  if (err) {
    screen.error(err);
  } else {
    screen.write(rows, 'json')
  }
})

knex.destroy();
