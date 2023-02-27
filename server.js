require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT;
require("./src/database/database.js");

//inicialização do express
const app = express();
app.listen(port, () => {
  console.log(`Aplicação ativa na porta: ${port} => http://localhost:3001/cpf`);
});

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.use(require("./routes.js"));

module.exports = app;
