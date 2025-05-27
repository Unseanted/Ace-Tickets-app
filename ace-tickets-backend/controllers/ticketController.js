const { v4: uuidV4 } = require("uuid");
const Ticket = require("../models/Ticket");
const Event = require("../models/Event");

// Get ticket by ID
const getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id).populate(
      "user",
      "firstName lastName email"
    );

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching ticket", error: error.message });
  }
};

// Create new ticket
const createTicket = async (req, res) => {
  try {
    const { eventId, userId } = req.body;

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

    // Create ticket
    const ticket = new Ticket({
      user: userId,
      ticketNumber: uuidV4(),
    });

    await ticket.save();

    // Update available tickets
    event.availableTickets -= 1;
    await event.save();

    res.status(201).json(ticket);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating ticket", error: error.message });
  }
};

// Get user's tickets
const getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.params.userId });
    res.status(200).json(tickets);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tickets", error: error.message });
  }
};

module.exports = {
  getTicket,
  createTicket,
  getUserTickets,
};
