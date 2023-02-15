const mongoose = require("mongoose");
const err = require("../public/CustomError");
const util = require("../public/util");

const cpfSchema = new mongoose.Schema({
  cpf: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("cpf", cpfSchema);
