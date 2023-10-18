const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    hotelServices: [String],
    hotelStrengths: [String],
    offerTags: [String],
  }
);

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
