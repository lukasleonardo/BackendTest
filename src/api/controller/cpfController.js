// import do model de cpf
const cpf = require("../model/cpfModel");
//imports dos erros predefinidos
const err = require("../public/CustomError");
// import da função de validação de cpf
const util = require("../public/util");

class cpfController {
  //função de inserção de novo cpf
  async addCpf(req, res) {
    const info = req.body;
    try {
      if (util.validateCpf(req.body.cpf) === false) {
        throw new err.InvalidCpfException();
      }
      const data = await cpf.create(info);
      return res.status(201).json(data);
    } catch (e) {
      if (e["code"] === 11000) {
        const y = new err.ExistsCpfException();
        res.status(422).json(`type: ${y.type},  message:${y.message}`);
      }
      if (e instanceof err.InvalidCpfException) {
        console.log("cheguei aqui!!!!!");
        res.status(422).json(`type: ${e.type},  message:${e.message}`);
      }
    }
  }
  //função de encontrar todos os cpfs
  async findAllCpf(req, res) {
    try {
      const data = await cpf.find({});
      res.status(200).json(data);
    } catch (e) {
      console.log(e);
    }
  }
  // função de encontrar cpf específico
  async checkCpf(req, res) {
    try {
      if (util.validateCpf(req.params.cpf) === false) {
        throw new err.InvalidCpfException();
      }
      const data = await cpf.findOne({ cpf: req.params.cpf });
      if (data === null) {
        throw new err.NotFoundCpfException();
      }
      return res.status(200).json(data);
    } catch (e) {
      if (e instanceof err.InvalidCpfException) {
        console.log(e);
      } else if (e instanceof err.NotFoundCpfException) {
        console.log(e);
      }
      res.status(422).json(`type: ${e.type},  message:${e.message}`);
    }
  }
  // função para remover Cpf
  async removeCpf(req, res) {
    try {
      if (util.validateCpf(req.params.cpf) === false) {
        throw new err.InvalidCpfException();
      }
      const data = await cpf.findOneAndDelete({ cpf: req.params.cpf });
      if (data === null) {
        throw new err.NotFoundCpfException();
      }
      return res.status(200).json(data);
    } catch (e) {
      if (e instanceof err.InvalidCpfException) {
        console.log(e);
      } else if (e instanceof err.NotFoundCpfException) {
        console.log(e);
      }
      res.status(422).json(`type: ${e.type},  message:${e.message}`);
    }
  }
}

module.exports = new cpfController();
