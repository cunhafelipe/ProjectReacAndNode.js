const router = require("express").Router();
const UserController = require("../controllers/userController.js");

router.route("/users").get(UserController.findUsers);

router.route("/user").post(UserController.createUser);

router.get("/api/exemplo", (_request, response) => {
  response.json({
    message: "Conexão entre o back-end e o front-end estabelecida com sucesso!",
  });
});

module.exports = router;
