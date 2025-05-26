const express = require('express');
const { getAllMovies, getOneMovie } = require('../controllers/moviescontroller');


const router = express.Router();

router.get('/', getAllMovies);
router.get('/:id', getOneMovie);
module.exports = router;