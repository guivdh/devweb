const express = require('express');
const router = express.Router();

const presenceEventCtrl = require('../controllers/presenceEvent');

const auth = require('../middleware/auth');

router.get('/', presenceEventCtrl.getPresenceEvent);
router.get('/:id', presenceEventCtrl.getIdPresenceEvent);
router.post('/', auth, presenceEventCtrl.createPresenceEvent);
router.put('/', auth, presenceEventCtrl.updatePresenceEvent);
router.delete('/', auth, presenceEventCtrl.deletePresenceEvent);

module.exports = router;