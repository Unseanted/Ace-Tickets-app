const { v4: uuidV4 } = require("uuid");

const getTicket = async (req, res) => {
  const tickedId = uuidV4();
  // save to database
  res.send({ tickedId });
};

module.exports = { getTicket };
