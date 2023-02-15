require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT;
require("./src/database/database.js");

const app = express();
app.listen(port, () => {
  console.log("estou rodando na porta " + port);
});

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.use(require("./routes.js"));
