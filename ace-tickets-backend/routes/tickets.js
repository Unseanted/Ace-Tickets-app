const express = require("express");
const { getTicket } = require("../controllers/ticketController");
const { authenticateJWT } = require("../middleware/auth");

const router = express.Router();

router.get("/", authenticateJWT, getTicket);

module.exports = router;
