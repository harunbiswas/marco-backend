const mongoose = require("mongoose");

const regionTempleteSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  carrency: { type: String, required: true, default: "€" },
  dates: [{ start: String, end: String, price: String }],
});

const RegionTemplete = mongoose.Model("RegionTemplete", regionTempleteSchema);

module.exports = RegionTemplete;
