exports.up = function (knex, Promise) {
  return knex.schema.createTable("clientes", (t) => {
    t.increments("id");
    t.string("cpf");
    t.string("nome");
    t.string("email");
    t.bigInteger("cep");
    t.string("cidade");
    t.string("uf");
    t.decimal("saldo_valor");
    t.decimal("saldo_cota");
    t.boolean("cota_contratada");
    t.decimal("cota_media_kw");
    t.decimal("cota_media_vl");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("clientes");
};
