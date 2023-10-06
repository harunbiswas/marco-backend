const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    id: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Module = mongoose.model("Module", moduleSchema);

module.exports = Module;
