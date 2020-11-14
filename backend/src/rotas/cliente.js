const knex = require("../knex");
const express = require("express");
const rota = express.Router();

const TABELA = "clientes";

rota.route("/").get(async (req, res) => {
  const clientes = await knex.select().table(TABELA);
  res.json([...clientes]);
});

rota.route("/:cpf").get(async (req, res) => {
  const { cpf } = req.params;
  const cliente = await knex.select().table(TABELA).where({ cpf: cpf });
  res.json({ ...cliente });
});

module.exports = rota;
