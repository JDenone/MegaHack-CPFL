const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerDocument = YAML.load("./src/rotas/swagger.yaml");
const rotaCliente = require("./src/rotas/clientes");
const rotaAparelho = require("./src/rotas/aparelhos");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use("/clientes", rotaCliente);
app.use("/aparelhos", rotaAparelho);

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
