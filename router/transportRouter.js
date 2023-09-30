const express = require("express");
const {
  addTransport,
  getTransport,
  updateTransport,
  deleteTransport,
} = require("../controler/transport/TransportControler");
const authGurd = require("../middlewares/common/authGurd");
const {
  addTransportValidator,
} = require("../middlewares/transport/transportValidatror");
const { validationResult } = require("express-validator");
const validationHandler = require("../middlewares/common/validation");

const router = express.Router();

// add transport
router.post(
  "/",
  authGurd,
  addTransportValidator,
  validationHandler,
  addTransport
);

router.put(
  "/",
  authGurd,
  addTransportValidator,
  validationHandler,
  updateTransport
);

router.get("/", authGurd, getTransport);

// delete transport
router.delete("/", authGurd, deleteTransport);
module.exports = router;
