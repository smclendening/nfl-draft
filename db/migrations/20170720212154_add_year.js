exports.up = function(knex, Promise) {
  console.log(' IN THE MIGRATION! CHECK PLEASE! ');
  return knex.schema.table('players', table => {
    table.integer('year').notNull().defaultTo(2017);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('players', table => {
    table.dropColumn('year');
  })
};
