const express = require("express");
const {
  getUserTickets,
  createTicket,
} = require("../controllers/ticketController");
const { authenticateJWT } = require("../middleware/auth");

const router = express.Router();

// Protected routes

router.get("/", authenticateJWT, getUserTickets);
router.post("/", authenticateJWT, createTicket);

module.exports = router;
