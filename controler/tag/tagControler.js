const Tag = require("../../model/Tag");

require("dotenv").config();

const getTagsByKey = async function (req, res) {
  try {
    const result = await Tag.findOne();
    console.log("tag results", result);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      errors: {
        msg: "Internal server error",
      },
    });
  }
};

const addNewTag = async function (req, res) {
  console.log(req.body);
  const { tag, tagCat } = req.body;
  try {
    const result = await Tag.updateOne({}, { $addToSet: { [tagCat]: tag } });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      errors: {
        msg: "Internal server error",
      },
    });
  }
};
module.exports = { getTagsByKey, addNewTag };
