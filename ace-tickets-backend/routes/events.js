const express = require("express");
const {
  getAllEvents,
  getOneEvent,
  deleteEvent,
  createEvent,
} = require("../controllers/eventscontroller");

const router = express.Router();

router.get("/", getAllEvents);
router.post("/", createEvent);
router.get("/:id", getOneEvent);
router.delete("/:id", deleteEvent);
module.exports = router;
