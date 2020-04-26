const express = require('express');
const router = express.Router();

const presenceEntCtrl = require('../controllers/presenceEnt');

const auth = require('../middleware/auth');

router.get('/', presenceEntCtrl.getPresenceEnt);
router.get('/:id', presenceEntCtrl.getIdPresenceEnt);
router.post('/', auth, presenceEntCtrl.createPresenceEnt);
router.put('/', auth, presenceEntCtrl.updatePresenceEnt);
router.delete('/', auth, presenceEntCtrl.deletePresenceEnt);

module.exports = router;