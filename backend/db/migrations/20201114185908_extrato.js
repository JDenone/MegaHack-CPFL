const TABELAS = require("../tabelas");

const operacoes = ["ADD", "SUB"];

exports.up = function (knex) {
  return knex.schema.createTable(TABELAS.extrato, (t) => {
    t.increments("id");
    t.string("cpf_cliente");
    t.string("descricao");
    t.decimal("valor");
    t.enu("operacao", operacoes);
    t.datetime("data");
    t.timestamp("criado_em").defaultTo(knex.fn.now());

    t.foreign("cpf_cliente").references(`${TABELAS.extrato}.cpf`);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(TABELAS.historico);
};
