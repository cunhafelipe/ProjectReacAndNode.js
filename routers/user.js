const router = require("express").Router();
const UserController = require("../controllers/userController.js");

router.route("/users").get(UserController.findUsers);

router.route("/user").post(UserController.createUser);

module.exports = router;
