const mongoose = require("mongoose");

const transportSchema = new mongoose.Schema({
  name: String,
  transportId: String,
  city: String,
  state: String,
  zip: String,
  address: String,
  vehicleType: String,
  vehicleBrand: String,
  startingDate: Date,
  endingDate: Date,
  hours: [String],
  days: [String],
  pricing: [
    {
      id: Number,
      items: [
        {
          name: String,
          option: [String],
          value: String,
          full: Boolean,
          activeValue: String,
        },
      ],
    },
  ],
});

const Transport = mongoose.model("Transport", transportSchema);

module.exports = Transport;
