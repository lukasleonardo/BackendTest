const server = require("../../../server");
const request = require("supertest");
const err = require("../public/CustomError");
var chai = require("chai");
var should = chai.should();
var expect = chai.expect;

describe("Testing controller funcionalities", () => {
  //teste de rota Get (getAll)
  it("Should return all cpfs", async () => {
    const data = await request(server).get("/cpf");
    should.exist(data.body);
    expect(200);
    expect(data.body[1]).to.have.property("cpf");
    expect(data.body[1]).to.have.property("createdAt");
  });

  // cria uma nova inserção de cpf
  it("should create a defined cpf", async () => {
    const data = await await request(server).post("/cpf").send({
      cpf: "45554861881",
    });
    expect(201);
    expect(data.body).to.have.property("cpf");
    expect(data.body).to.have.property("createdAt");
  });

  // testa a rota getById
  it("should return a defined cpf", async () => {
    const data = await await request(server).get("/cpf/45554861881");
    expect(200);
    expect(data.body).to.have.property("cpf");
    expect(data.body).to.have.property("createdAt");
  });

  // Testa à rota Post para a possibilidade de cpf invalido.
  it("should throw an invalid exception error", async () => {
    const data = await await request(server).post("/cpf").send({
      cpf: "85116246377",
    });
    info = data.body;
    expect(422, {
      errors: [
        {
          code: err.InvalidCpfException,
        },
      ],
    });
    should.Throw;
  });

  // Testa à rota Post para a possibilidade de duplicidade de cpf.
  it("should throw an exist exception error", async () => {
    const data = await await request(server).post("/cpf").send({
      cpf: "85116246353",
    });
    info = data.body;
    expect(422, {
      errors: [
        {
          code: err.ExistsCpfException,
        },
      ],
    });
    should.Throw;
  });

  // testa a rota delete.
  it("should delete a defined cpf", async () => {
    const data = await await request(server).delete("/cpf/45554861881");
    expect(data.body).to.have.property("cpf");
    expect(data.body).to.have.property("createdAt");
  });
});
