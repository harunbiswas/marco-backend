const mongoose = require("mongoose");

const dateOfferSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  carrency: { type: String, required: true, default: "€" },
  dates: [{ type: String, end: String, price: Number, id: Number }],
});

const DateTemplete = mongoose.model("DateTemplete", dateOfferSchema);

module.exports = DateTemplete;
