const { check } = require("express-validator");

const loginUserValidation = [
  check("email")
    .isLength({ min: 1 })
    .withMessage("Email is required!")
    .isEmail()
    .withMessage("Invalid Email")
    .trim(),
  check("password").isLength({ min: 1 }).withMessage("Password is required"),
];

module.exports = { loginUserValidation };
