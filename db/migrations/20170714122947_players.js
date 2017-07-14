exports.up = function(knex, Promise) {
  return knex.schema.table('players', function (table) {
    table.dropUnique('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players');
};




