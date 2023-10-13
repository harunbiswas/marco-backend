const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "People",
    },
    id: {
      type: String,
      required: true,
      trim: true,
    },
    templeteId: String,
    publish: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Module = mongoose.model("Module", moduleSchema);

module.exports = Module;
