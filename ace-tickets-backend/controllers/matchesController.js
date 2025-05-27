const matches = [
  {
    id: 1,
    teams: ["Liverpool", "Chelsea"],
    date: "2021-01-01",
    venue: "Anfield",
    available: true,
  },
  {
    id: 2,
    teams: ["Manchester United", "Manchester City"],
    date: "2021-01-02",
    venue: "Old Trafford",
    available: false,
  },
];

const Event = require("../models/Event");

// Get all matches
exports.getMatches = async (req, res) => {
  try {
    const matches = await Event.find({ category: "football" }).sort({
      date: 1,
    });
    res.status(200).json(matches);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching matches", error: error.message });
  }
};

// Get match by ID
exports.getMatchById = async (req, res) => {
  try {
    const match = await Event.findOne({
      _id: req.params.id,
      category: "football",
    });

    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }
    res.status(200).json(match);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching match", error: error.message });
  }
};

// Create new match
exports.createMatch = async (req, res) => {
  try {
    const match = new Event({
      ...req.body,
      category: "football",
    });
    await match.save();
    res.status(201).json(match);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating match", error: error.message });
  }
};

// Delete match
exports.deleteMatch = async (req, res) => {
  try {
    const match = await Event.findOneAndDelete({
      _id: req.params.id,
      category: "football",
    });

    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }
    res.status(200).json({ message: "Match deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting match", error: error.message });
  }
};
