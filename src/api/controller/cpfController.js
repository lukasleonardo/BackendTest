const cpf = require("../model/cpfModel");
const err = require("../public/CustomError");
const { validateCpf } = require("../public/util");

class cpfController {
  async addCpf(req, res) {
    const data = await cpf.create(req.body);

    return res.status(200).json(data);
  }

  async findAllCpf(req, res) {
    const data = await cpf.find({});
    res.status(200).json(data);
  }

  async findByCpf(req, res) {
    const data = await cpf.findOne({ cpf: req.params });

    return res.status(200).json(data);
  }

  async deleteByCpf(req, res) {
    const data = await cpf.findOneAndDelete({ cpf: req.params });

    return res.status(200).json(data);
  }
}

module.exports = new cpfController();
