const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    images: [
      {
        src: String,
      },
    ],
    morganaId: {
      type: String,
      required: false,
    },
    hotelWebsite: {
      type: String,
    },
    email: {
      type: String,
    },
    country: {
      type: String,
    },
    phone: {
      type: String,
    },
    hotelXMLurl: {
      type: String,
    },
    priority: {
      type: String,
    },
    hotelDescription: {
      type: String,
    },
    summaryDescription: {
      type: String,
    },
    roomsDescription: {
      type: String,
    },
    spaDescription: {
      type: String,
    },
    restaurantDescription: {
      type: String,
    },
    rating: {
      type: Number,
    },
    serviceDetails: String,
    services: [String],
    strengths: [String],
    ageDeductions: [
      {
        id: {
          type: Number,
          default: 1,
        },
        items: [
          {
            id: {
              type: Number,
              default: 1,
            },
            label: String,
            value: String,
          },
          {
            id: {
              type: Number,
              default: 2,
            },
            label: String,
            value: String,
          },
        ],
      },
    ],
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: String,
    },
    address: {
      type: String,
    },
    coordinate: {
      type: String,
    },
    distance: [
      {
        name: String,
        scle: String,
        dist: Number,
      },
    ],
    offers: [String],
  },
  {
    timestamps: true,
  }
);

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
