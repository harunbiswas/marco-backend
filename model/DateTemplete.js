const mongoose = require("mongoose");

const dateOfferSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  carrency: { type: String, required: true, default: "€" },
  dates: [{ start: String, end: String, price: String }],
});

const DateTemplete = mongoose.Model("DateTemplete", dateOfferSchema);

module.exports = DateTemplete;
