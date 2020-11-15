const TABELAS = require("../../tabelas");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(TABELAS.aparelhos)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(TABELAS.aparelhos).insert([
        { consumo: 10, nome: "TV" },
        { consumo: 5, nome: "RADIO" },
        { consumo: 20, nome: "VENTILADOR" },
        { consumo: 50, nome: "AR-CONDICIONADO" },
        { consumo: 30, nome: "GELADEIRA" }
      ]);
    });
};
