const express = require('express');
const router = express.Router();

const presenceMatchCtrl = require('../controllers/presenceMatch');

const auth = require('../middleware/auth');

router.get('/', presenceMatchCtrl.getPresenceMatch);
router.get('/:id', presenceMatchCtrl.getIdPresenceMatch);
router.post('/', auth, presenceMatchCtrl.createPresenceMatch);
router.put('/', auth, presenceMatchCtrl.updatePresenceMatch);
router.delete('/', auth, presenceMatchCtrl.deletePresenceMatch);

module.exports = router;