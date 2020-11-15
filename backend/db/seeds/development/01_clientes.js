const TABELAS = require("../../tabelas");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(TABELAS.clientes)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(TABELAS.clientes).insert([
        {
          cpf: "04603590705",
          nome: "Jessica Monteiro da Silva",
          email: "jessica@email.com",
          cep: "04546001",
          cidade: "São Paulo",
          uf: "SP",
          saldo_valor: 0.0,
          saldo_cota: 0.0,
          cota_contratada: true,
          cota_media_kw: 153,
          cota_media_vl: 114.75
        },
        {
          cpf: "99999999999",
          nome: "Aycan Doganlar",
          email: "aycan@email.com",
          cep: "11940000",
          cidade: "Florianópolis",
          uf: "SC",
          saldo_valor: 0.0,
          saldo_cota: 0.0,
          cota_contratada: false,
          cota_media_kw: 120,
          cota_media_vl: 105
        }
      ]);
    });
};
