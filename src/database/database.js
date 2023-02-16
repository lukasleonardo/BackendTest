require("dotenv").config();
const mongoose = require("mongoose");
const strConnect = process.env.MONGO_URI;
//Conecção com o banco de dados MongoDB
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose
  .connect(strConnect, { useNewUrlParser: true })
  .then(() => console.log("Conectado ao MongoDb em: " + strConnect))
  .catch((e) => console.log(e));
