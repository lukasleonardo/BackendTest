const express = require("express");
const router = express.Router();
const cpfController = require("./src/api/controller/cpfController");

//Rota para encontrar todos os cpfs
router.get("/cpf", cpfController.findAllCpf);

//Rota de criação de um novo CPF
router.post("/cpf", cpfController.addCpf);

//rota para checar cpf
router.get("/cpf/:cpf", cpfController.checkCpf);

router.delete("/cpf/:cpf", cpfController.removeCpf);

module.exports = router;
