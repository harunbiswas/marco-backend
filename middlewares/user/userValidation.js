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

const adduserValidation = [
  check("firstName").isLength({ min: 1 }).withMessage("First name is required"),
  check("lastName").isLength({ min: 1 }).withMessage("Last name is required"),
  check("email")
    .isLength({ min: 1 })
    .withMessage("Email is required!")
    .isEmail()
    .withMessage("Invalid Email")
    .trim(),
  check("password").isLength({ min: 1 }).withMessage("Password is required"),
  check("role").isLength({ min: 1 }).withMessage("Role is required"),
];
const updateuserValidation = [
  check("firstName").isLength({ min: 1 }).withMessage("First name is required"),
  check("lastName").isLength({ min: 1 }).withMessage("Last name is required"),
  check("email")
    .isLength({ min: 1 })
    .withMessage("Email is required!")
    .isEmail()
    .withMessage("Invalid Email")
    .trim(),
  check("role").isLength({ min: 1 }).withMessage("Role is required"),
];
module.exports = {
  loginUserValidation,
  adduserValidation,
  updateuserValidation,
};
