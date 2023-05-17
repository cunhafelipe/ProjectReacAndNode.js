const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 7,
  },
});

const User = mongoose.model("User", UserModel);

module.exports = User;
