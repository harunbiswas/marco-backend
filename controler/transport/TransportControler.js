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

module.exports = { addTransport, getTransport };
