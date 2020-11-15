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

rota.route("/:cpf/assinar-pre-pago").put(async (req, res) => {
  const { cpf } = req.params;
  const { cota, valor } = req.body;

  if (typeof cota == "undefined" || typeof valor == "undefined") {
    res.status(400).send({ erro: "Cota e valor são obrigatórios." });
    return;
  }

  const cliente = await knex
    .select()
    .table(TABELAS.clientes)
    .where({ cpf: cpf })
    .first();

  if (!cliente || cliente.length) {
    res.status(400).send({ erro: "Cliente não encontrado." });
    return;
  }

  let novaCota = cliente.saldo_cota + cota;
  let novoSaldo = cliente.saldo_valor + valor;

  await knex(TABELAS.clientes).where({ cpf: cpf }).update({
    cota_contratada: true,
    cota_media_kw: cota,
    cota_media_vl: valor,
    saldo_valor: novoSaldo,
    saldo_cota: novaCota
  });

  await knex(TABELAS.extrato).insert({
    cpf_cliente: cpf,
    descricao: "Assinatura pré-pago",
    valor: valor,
    operacao: "ADD",
    data: Date.now()
  });

  res.sendStatus(204);
});

rota.route("/:cpf/assinar-pos-pago").put(async (req, res) => {
  const { cpf } = req.params;

  let cliente = await knex
    .select()
    .table(TABELAS.clientes)
    .where({ cpf: cpf })
    .first();

  if (!cliente || cliente.length) {
    res.status(400).send({ erro: "Cliente não encontrado." });
    return;
  }

  await knex(TABELAS.clientes)
    .where({ cpf: cpf })
    .update({ cota_contratada: false }, ["cpf", "cota_contratada"]);
  res.sendStatus(204);
});

rota.route("/").post(async (req, res) => {
  const { cpf, nome, email, cep, cidade, uf } = req.body;

  const isValido = cpf && nome && email && cep && cidade && uf;

  if (!isValido) {
    res.status(400).send({ erro: "Dados dos cliente são obrigatórios." });
    return;
  }

  await knex(TABELAS.clientes).insert({
    cpf: cpf,
    nome: nome,
    email: email,
    cep: cep,
    cidade: cidade,
    uf: uf,
    saldo_valor: 0,
    saldo_cota: 0,
    cota_contratada: false,
    cota_media_kw: 0,
    cota_media_vl: 0
  });

  let cliente = await knex
    .select()
    .table(TABELAS.clientes)
    .where({ cpf: cpf })
    .first();

  if (!cliente || cliente.length) {
    res.status(500).send({ erro: "Falha no cadastro." });
  } else {
    cliente.id = null;
    res.status(201).json(cliente);
  }
});

module.exports = rota;
