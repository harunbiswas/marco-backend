const { default: mongoose } = require("mongoose");

const citySchecma = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    zip: String,
    region: String,
  },
  {
    timestamps: true,
  }
);

const City = mongoose.model("City", citySchecma);

module.exports = City;
