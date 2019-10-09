const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean, required: true, default: false },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("user", UserSchema);
