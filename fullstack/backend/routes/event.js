const express = require('express');
const router = express.Router();

const eventCtrl = require('../controllers/event');

const auth = require('../middleware/auth');

router.get('/', eventCtrl.getEvent);
router.get('/:id', eventCtrl.getIdEvent);
router.put('/', auth, eventCtrl.updateEvent);
router.delete('/', auth, eventCtrl.deleteEvent);
router.post('/', auth, eventCtrl.createEvent);

module.exports = router;