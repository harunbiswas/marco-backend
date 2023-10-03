const { default: mongoose } = require("mongoose");

const vahicaleSchecma = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Vahicale = mongoose.model("Vahicale", vahicaleSchecma);

module.exports = Vahicale;
