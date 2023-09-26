const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
    enum: ["admin", "sub-admin"],
    default: "sub-admin",
  },
});

const People = mongoose.model("People", peopleSchema);

module.exports = People;
