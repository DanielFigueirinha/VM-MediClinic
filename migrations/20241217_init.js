module.exports.up = async (knex) => {
  await knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('cpf', 11).notNullable();
    table.string('email').notNullable();
    table.string('phone', 11).notNullable();
    table.string('password').notNullable();
    table.boolean('status').notNullable().defaultTo(true);
    table.date('birth').notNullable();
    table.dateTime('createdAt').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updatedAt').notNullable().defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('professionals', (table) => {
    table.increments('id');
  });

  await knex.schema.createTable('patients', (table) => {
    table.increments('id');
  });

  await knex.schema.createTable('addresses', (table) => {
    table.increments('id');
  });

  await knex.schema.createTable('offices', (table) => {
    table.increments('id');
  });

  await knex.schema.createTable('consultations', (table) => {
    table.increments('id');
  });
};

module.exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('consultations');
  await knex.schema.dropTableIfExists('offices');
  await knex.schema.dropTableIfExists('addresses');
  await knex.schema.dropTableIfExists('patients');
  await knex.schema.dropTableIfExists('professionals');
  await knex.schema.dropTableIfExists('users');
};
