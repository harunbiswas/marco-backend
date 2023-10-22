const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    name: String,
    catagory: String,
  },
  {
    timestamps: true,
  }
);

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
