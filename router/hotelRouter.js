const express = require("express");
const {
  getHotels,
  addHotel,
  getHotel,
  updateHotel,
} = require("../controler/hotel/hotelControler");
const authGurd = require("../middlewares/common/authGurd");
const { addHotelValidation } = require("../middlewares/hotel/hotelValidation");
const validationHandler = require("../middlewares/common/validation");

const router = express.Router();

// get all hotel
router.get("/", getHotels);

// add a hole
router.post("/", authGurd, addHotelValidation, validationHandler, addHotel);

// update hotel
router.put("/", authGurd, addHotelValidation, validationHandler, updateHotel);

// get single hotel
router.get("/single", getHotel);

module.exports = router;
