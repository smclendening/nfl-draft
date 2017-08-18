
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', (table) => {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('position').notNullable();
    table.string('college').notNullable();
    table.integer('height');
    table.integer('weight');
    table.decimal('forty_yd');
    table.decimal('vertical');
    table.integer('bench_reps');
    table.decimal('cone');
    table.decimal('shuttle');
    table.string('team');
    table.integer('round');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players');
};


