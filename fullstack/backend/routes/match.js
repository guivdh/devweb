const express = require('express');
const router = express.Router();

const matchCtrl = require('../controllers/match');

const auth = require('../middleware/auth');

router.get('/', matchCtrl.getMatch);
router.get('/:id', matchCtrl.getIdMatch);
router.post('/', auth, matchCtrl.createMatch);
router.put('/', auth, matchCtrl.updateMatch);
router.delete('/', auth, matchCtrl.deleteMatch);

module.exports = router;