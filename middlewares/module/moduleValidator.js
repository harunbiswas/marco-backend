const { check } = require("express-validator");
const Module = require("../../model/Module");

const addModuleValidator = [
  check("name").isLength({ min: 1 }).withMessage("Name is required").trim(),
  check("id")
    .isLength({ min: 1 })
    .withMessage("Id is required")
    .custom(async (req, res, next) => {
      try {
        const result = await Module.findOne({ id: req.id });
        next();
      } catch (err) {
        res.stauts(200).json("Internal server errors");
      }
    })
    .withMessage("Id already use"),
];

module.exports = { addModuleValidator };
