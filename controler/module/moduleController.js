const Module = require("../../model/Module");

// add module controller
const addModule = async function addModule(req, res) {
  const module = new Module(req.body);

  try {
    const result = await module.save();
    res.status(200).json(result);
  } catch {
    res.status(500).json("Internal server errors");
  }
};

// get modules
const getModules = async function (req, res) {
  try {
    const result = await Module.find();
    res.status(200).json(result);
  } catch {
    res.status(500).json("Internal server errors");
  }
};

//get single module
const getModule = async function (req, res) {
  const { id } = req.query;

  try {
    const result = await Module.findOne({ _id: id });
    res.status(200).json(result);
  } catch {
    res.status(500).json("Internal server errors");
  }
};

// edit module
const editModule = async function (req, res) {
  const { _id } = req.body;

  try {
    const result = await Module.findOneAndUpdate({ _id }, req.body, {
      new: true,
    });
    res.status(200).json(result);
  } catch {
    res.status(500).json("Internal server errors");
  }
};

// delete module
const deleteModule = async function (req, res) {
  const { id } = req.query;
  try {
    const result = await Module.findByIdAndDelete({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json("Internal server errors");
  }
};

module.exports = {
  addModule,
  getModules,
  getModule,
  editModule,
  deleteModule,
};
