const User = require("../models/userModel.js");

const UserController = {
  async findUsers(request, response) {
    try {
      const user = await User.find();
      response.json(user);
    } catch (error) {
      console.log(error);
    }
  },

  async createUser(request, response) {
    try {
      const user = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
      };

      const isEmailExists = await User.findOne({ email: user.email });

      if (isEmailExists) {
        response.status(400).send("E-mail já criado");
      }

      if (user.password.length < 7) {
        response.status(400).send("Senha pequena");
      }

      if (!user) {
        response.status(400).send("Dados vazios");
      }

      return await User.create(user).then((userCreate) => {
        response.status(200).json(userCreate);
      });
    } catch (error) {
      response.status(200).send(error.message);
    }
  },
};

module.exports = UserController;
