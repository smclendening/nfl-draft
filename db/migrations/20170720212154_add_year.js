exports.up = function(knex, Promise) {
  return knex.schema.table('players', table => {
    table.integer('year').notNull().defaultTo(2017);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('players', table => {
    table.dropColumn('year');
  })
};
