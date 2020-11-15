const TABELAS = require("../tabelas");

exports.up = function (knex) {
  return knex.schema.createTable(TABELAS.historico, (t) => {
    t.increments("id");
    t.string("cpf_cliente");
    t.bigInteger("competencia"); // formato "YYYYMM"
    t.decimal("valor");
    t.boolean("pago");

    t.foreign("cpf_cliente").references(`${TABELAS.clientes}.cpf`);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(TABELAS.historico);
};
