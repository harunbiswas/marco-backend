const Tag = require("../../model/Tag");

require("dotenv").config();

const getTagsByKey = async function (req, res) {
  try {
    const allTags = await Tag.find({});

    for (const tag of allTags) {
      const isTagUsed = await Hotel.exists({
        $or: [
          { "offers.tags": tag._id }, // Assuming tags are stored as ObjectIds in the offers array
          { services: tag.name }, // Assuming services are stored as strings in the services array
          { strengths: tag.name }, // Assuming strengths are stored as strings in the strengths array
        ],
      });

      if (!isTagUsed) {
        try {
          const deletedTag = await Tag.findByIdAndDelete(tag._id);

          const result = await Tag.findOne(); // Assuming you want to retrieve a tag after deletion
          console.log("Tag result", result);

          res.status(200).json(result);
        } catch (err) {
          res.status(500).json({
            errors: {
              msg: "Internal server error",
            },
          });
        }
      }
    }
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
