const Event = require("../models/Event");

// Get all movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await Event.find({ category: "movie" }).sort({ date: 1 });
    res.status(200).json(movies);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching movies", error: error.message });
  }
};

// Get one movie by ID
const getOneMovie = async (req, res) => {
  try {
    const movie = await Event.findOne({
      _id: req.params.id,
      category: "movie",
    });

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(movie);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching movie", error: error.message });
  }
};

// Create new movie
const createMovie = async (req, res) => {
  try {
    const movie = new Event({
      ...req.body,
      category: "movie",
    });
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating movie", error: error.message });
  }
};

// Delete movie
const deleteMovie = async (req, res) => {
  try {
    const movie = await Event.findOneAndDelete({
      _id: req.params.id,
      category: "movie",
    });

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting movie", error: error.message });
  }
};

module.exports = {
  getAllMovies,
  getOneMovie,
  createMovie,
  deleteMovie,
};
