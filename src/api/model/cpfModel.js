const mongoose = require("mongoose");

//modelo do cpf no banco de dados contendo cpf e data de criação
const cpfSchema = new mongoose.Schema({
  cpf: {
    type: String,
    unique: true, // restrição de integridade de não duplicidade
  },
  createdAt: {
    type: Date,
    default: Date.now, // data da criação, por padrão já é ISO
  },
});

module.exports = mongoose.model("cpf", cpfSchema);
