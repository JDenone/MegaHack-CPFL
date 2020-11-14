const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerDocument = YAML.load("./src/rotas/swagger.yaml");
const rotaCliente = require("./src/rotas/cliente");

const PORT = process.env.PORT || 8080;
const app = express();

app.use("/clientes", rotaCliente);

app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true
  })
);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
