const knex = require("../knex");
const express = require("express");
const rota = express.Router();

const TABELAS = require("../../db/tabelas");

rota.route("/").get(async (req, res) => {
  const aparelhos = await knex.select().table(TABELAS.aparelhos);
  res.json([...aparelhos]);
});

module.exports = rota;
