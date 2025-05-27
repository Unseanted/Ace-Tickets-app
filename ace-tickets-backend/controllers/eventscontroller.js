const Event = require("../models/Event");

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const category = req.query.category;
    if (!category) {
      const events = await Event.find().sort({ date: 1 }); // Sort by date ascending
      return res.status(200).json({ events });
    }
    const events = await Event.find({ category }).sort({ date: 1 }); // Sort by date ascending
    res.status(200).json(events);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching events", error: error.message });
  }
};

// Get one event by ID
const getOneEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching event", error: error.message });
  }
};

const createEvent = async (req, res) => {
  try {
    const event = new Event({
      ...req.body,
      availableTickets: parseInt(req.body.availableTickets) || 0, // Default to 0 if not provided
    });

    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating event", error: error.message });
  }
};

// Delete event
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting event", error: error.message });
  }
};

module.exports = {
  getAllEvents,
  getOneEvent,
  createEvent,
  deleteEvent,
};
