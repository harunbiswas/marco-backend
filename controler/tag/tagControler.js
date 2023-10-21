const Tag = require("../../model/Tag");

require("dotenv").config();

const getTagsByKey = async function (req, res) {
  try {
    const unusedTags = await Tag.aggregate([
      {
        $lookup: {
          from: "hotels",
          localField: "_id",
          foreignField: "offers.tags",
          as: "usedTags",
        },
      },
      {
        $match: {
          usedTags: { $size: 0 },
        },
      },
    ]);

    if (unusedTags.length > 0) {
      const deletedTags = await Tag.deleteMany({
        _id: { $in: unusedTags.map((tag) => tag._id) },
      });

      const result = await Tag.find();

      res.status(200).json(result);
    } else {
      const result = await Tag.find();
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
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
