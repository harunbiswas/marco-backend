const express = require("express");
const { addTransport } = require("../controler/transport/TransportControler");
const authGurd = require("../middlewares/common/authGurd");
const {
  addTransportValidator,
} = require("../middlewares/transport/transportValidatror");
const { validationResult } = require("express-validator");
const validationHandler = require("../middlewares/common/validation");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("Transport router");
});

// add transport
router.post(
  "/",
  authGurd,
  addTransportValidator,
  validationHandler,
  addTransport
);
module.exports = router;
