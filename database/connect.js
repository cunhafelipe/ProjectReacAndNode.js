const mongoose = require("mongoose");
require("dotenv").config();

const connectDataBase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@projectreact.myjrvjz.mongodb.net/`
    );
    return console.log("Conectado com sucesso ao Banco de dados");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDataBase;
