const express = require("express");
const { getTagsByKey, addNewTag } = require("../controler/tag/tagControler");

const router = express.Router();

router.get("/", getTagsByKey);

router.post("/", addNewTag);

module.exports = router;
