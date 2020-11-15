const TABELAS = require("../../tabelas");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(TABELAS.historico)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(TABELAS.historico).insert([
        { cpf_cliente: "99999999999", competencia: 202007, valor: 55.15, pago: true },
        { cpf_cliente: "99999999999", competencia: 202008, valor: 65.05, pago: true },
        { cpf_cliente: "99999999999", competencia: 202009, valor: 75.1, pago: true },
        { cpf_cliente: "99999999999", competencia: 202010, valor: 85.2, pago: true },
        { cpf_cliente: "99999999999", competencia: 202011, valor: 50.5, pago: false },
      ]);
    });
};
