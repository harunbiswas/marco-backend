const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    id: {
      type: String,
      required: true,
      trim: true,
    },
    img: String,
    seoTitle: String,
    seoDescription: String,
    section1Title: String,
    section1Description: String,
    section1Video: String,
    section2Video1: String,
    section2Video2: String,
    section2Title: String,
    section2Desctiption: String,
    section3Title: String,
    section3Description: String,
    blog: [{ title: String, img: String, url: String }],
    bottomDescription: String,
    fiexDate: [
      {
        start: String,
        end: String,
        price: String,
        carrency: String,
      },
    ],
    fixtRegion: [
      {
        start: String,
        end: String,
        carrency: String,
        price: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Module = mongoose.model("Module", moduleSchema);

module.exports = Module;
