const TABELAS = require("../../tabelas");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(TABELAS.extrato)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(TABELAS.extrato).insert([
        { cpf_cliente: "99999999999", descricao: "Compra Cota", operacao: "ADD", valor: 100, data: Date.now() },
        { cpf_cliente: "99999999999", descricao: "Consumo outubro", operacao: "SUB", valor: 115, data: Date.now() },
      ]);
    });
};