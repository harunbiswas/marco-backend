const Hotel = require("../../model/Hotel");
const mongoose = require("mongoose");

// get hotels
const getHotels = async function (req, res, next) {
  res.status(200).json("hotels");
};

const addHotel = async function (req, res) {
  const { name, id, type } = req.body;
  const hotelObject = {
    name,
    id,
    type,
  };

  try {
    const rs = await Hotel.findOne({ id });

    if (!rs) {
      const hotel = new Hotel(hotelObject);
      try {
        const result = await hotel.save();
        res.status(200).json(result);
      } catch (err) {
        res.status(500).json({
          errors: {
            msg: "Internal server errors",
          },
        });
      }
    } else {
      res.status(400).json({
        id: {
          msg: "Inserire un altro Hotel ID",
        },
      });
    }
  } catch (err) {
    res.status(500).json({
      errors: {
        msg: "Internal server errors",
      },
    });
  }
};

//get single hotel
const getHotel = async function (req, res) {
  const { id } = req.query;
  const objectId = new mongoose.Types.ObjectId(id);

  try {
    const result = await Hotel.findOne({ _id: objectId });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      errors: {
        msg: "Internal server error",
      },
    });
  }
};

// upload hotel handler
const updateHotel = async function (req, res) {
  const { id } = req.body;
  try {
    const result = await Hotel.findOneAndUpdate(
      { id },
      {
        $set: { ...req.body },
      }
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(200).json({
      errors: {
        msg: "Internal server errors",
      },
    });
  }
};

module.exports = { getHotels, addHotel, getHotel, updateHotel };
