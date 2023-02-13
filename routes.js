const express = require("express");
const routes = express.Router();
const cpfController = require("./src/api/controller/cpfController");
//Rota para encontrar todos os cpfs
routes.get("/cpf", cpfController.findAllCpf);

//Rota de criação de um novo CPF
routes.post("/cpf", cpfController.addCpf);

//rota para checar cpf
routes.get("/cpf/:cpf", cpfController.findByCpf);

routes.delete("/cpf/:cpf", cpfController.deleteByCpf);

module.exports = routes;
