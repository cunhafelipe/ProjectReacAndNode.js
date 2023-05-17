const express = require("express");
const server = express();
const connectDataBase = require("../database/connect.js");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const PORT = 3000;

connectDataBase()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Servidor rodando na porta: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
