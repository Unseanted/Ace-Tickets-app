const { v4: uuidV4 } = require("uuid");
const Ticket = require("../models/Ticket");
const Event = require("../models/Event");
const jwt = require("jsonwebtoken");

// Create new ticket

const createTicket = async (req, res) => {
  try {
    const { eventId } = req.body;

    // Check if event exists and has available tickets
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (event.availableTickets <= 0) {
      return res
        .status(400)
        .json({ message: "No tickets available for this event" });
    }

    // extract userId from bearer token
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) return res.sendStatus(403);
      const userId = decoded.userId;

      // Create ticket
      const ticket = new Ticket({
        user: userId,
        ticketNumber: uuidV4(),
        event: eventId,
      });

      await ticket.save();

      // Update available tickets
      event.availableTickets -= 1;
      await event.save();

      res.status(201).json(ticket);
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating ticket", error: error.message });
  }
};

// Get user's tickets
const getUserTickets = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) return res.sendStatus(403);
      const userId = decoded.userId;
      const tickets = await Ticket.find({ user: userId });
      res.status(200).json(tickets);
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tickets", error: error.message });
  }
};

module.exports = {
  createTicket,
  getUserTickets,
};
