const express = require("express");
const mongoose = require("mongoose");
const db = require("./src/database/database");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT;

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middleware();
    this.routes();

    this.express.listen(port, () => {
      console.log(`Api funcionando na porta ${port}`);
    });
  }

  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true });
  }

  middleware() {
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(bodyParser.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}
module.exports = new App().express;
