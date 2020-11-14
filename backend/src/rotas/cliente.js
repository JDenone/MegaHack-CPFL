const knex = require("../knex");
const express = require("express");
const rota = express.Router();

const TABELAS = require("../../db/tabelas");

rota.route("/").get(async (req, res) => {
  const clientes = await knex.select().table(TABELAS.clientes);
  res.json([...clientes]);
});

rota.route("/:cpf").get(async (req, res) => {
  const { cpf } = req.params;
  const cliente = await knex
    .select()
    .table(TABELAS.clientes)
    .where({ cpf: cpf });
  res.json({ ...cliente });
});

rota.route("/:cpf/historico").get(async (req, res) => {
  const { cpf } = req.params;
  const historico = await knex
    .select()
    .table(TABELAS.historico)
    .where({ cpf_cliente: cpf });
  res.json({ ...historico });
});

rota.route("/:cpf/extrato").get(async (req, res) => {
  const { cpf } = req.params;
  const extrato = await knex
    .select()
    .table(TABELAS.extrato)
    .where({ cpf_cliente: cpf })
    .orderBy("data", "desc");
  res.json({ ...extrato });
});

module.exports = rota;
