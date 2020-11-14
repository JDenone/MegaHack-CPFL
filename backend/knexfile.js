// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds/development"
    },
    debug: true,
    useNullAsDefault: true
  },

  staging: {
    client: "sqlite3",
    connection: {
      filename: "./stag.sqlite3"
    },
    migrations: {
      tableName: "knex_migrations"
    },
    useNullAsDefault: true
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./prod.sqlite3"
    },
    migrations: {
      tableName: "knex_migrations"
    },
    useNullAsDefault: true
  }
};
