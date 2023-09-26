const express = require("express");
const { loginControler } = require("../controler/user/loginControler");
const validationHandler = require("../middlewares/common/validation");
const { loginUserValidation } = require("../middlewares/user/userValidation");
const router = express.Router();

router.post("/", loginUserValidation, validationHandler, loginControler);

module.exports = router;
