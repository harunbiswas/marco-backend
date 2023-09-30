const Transport = require("../../model/Transport");

const addTransport = async function (req, res) {
  try {
    const transport = new Transport(req.body);

    const result = await transport.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      errors: {
        msg: "Internal server error",
      },
    });
  }
};

// get transports
const getTransport = async function (req, res) {
  try {
    const result = await Transport.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      errors: {
        msg: "Internal server error",
      },
    });
  }
};

// update transport
const updateTransport = async function (req, res) {
  const { _id } = req.body;
  try {
    const resust = await Transport.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });

    res.status(200).json(resust);
  } catch (er) {
    res.status(500).json("Internal server errors");
  }
};

// delete handler
const deleteTransport = async function (req, res) {
  const { id } = req.query;
  try {
    const result = await Transport.findOneAndDelete({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json("Internal server errors");
  }
};

module.exports = {
  addTransport,
  getTransport,
  updateTransport,
  deleteTransport,
};
