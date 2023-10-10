const express = require("express");
const authGurd = require("../middlewares/common/authGurd");
const { addModuleValidator } = require("../middlewares/module/moduleValidator");
const { validationResult } = require("express-validator");
const { validate } = require("../model/Module");
const validationHandler = require("../middlewares/common/validation");
const {
  addModule,
  getModules,
  getModule,
  editModule,
  deleteModule,
  addTemplete,
  getTempletes,
  getTemplete,
} = require("../controler/module/moduleController");

const router = express.Router();

//add module
router.post("/", authGurd, addModuleValidator, validationHandler, addModule);

// get modules
router.get("/", getModules);
router.get("/single", getModule);
router.put("/", editModule);
router.delete("/", deleteModule);

// add templete
router.post("/templete", authGurd, addTemplete);
router.get("/templetes", authGurd, getTempletes);
router.get("/templete", authGurd, getTemplete);

module.exports = router;
