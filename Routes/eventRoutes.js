const express = require('express');
const router = express.Router();
const eventController = require('../Controllers/eventController');
const { upload } = require('../Config/cloudinary');
const auth = require('../Middlewares/auth');

router.get('/', eventController.getEvents);
router.get('/:id', eventController.getEventById);
router.post('/', auth, upload('events').single('image'), eventController.createEvent);
router.delete('/:id', auth, eventController.deleteEvent);

module.exports = router;
