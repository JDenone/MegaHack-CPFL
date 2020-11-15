const TABELAS = require("../tabelas");

exports.up = function (knex) {
  return knex.schema.createTable(TABELAS.aparelhos, (t) => {
    t.increments("id");
    t.string("nome").unique();
    t.decimal("consumo").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(TABELAS.aparelhos);
};
