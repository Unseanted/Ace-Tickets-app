const express = require('express');
const { getAllEvents, getOneEvent } = require('../controllers/eventscontroller');


const router = express.Router();

router.get('/', getAllEvents);
router.get('/:id', getOneEvent);
module.exports = router;