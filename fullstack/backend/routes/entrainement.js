const express = require('express');
const router = express.Router();

const entrainementCtrl = require('../controllers/entrainement');

const auth = require('../middleware/auth');

router.get('/', entrainementCtrl.getEntrainement);
router.get('/:id', entrainementCtrl.getIdEntrainement);
router.put('/', auth, entrainementCtrl.updateEntrainement);
router.delete('/', auth, entrainementCtrl.deleteEntrainement);
router.post('/', auth, entrainementCtrl.createEntrainement);

module.exports = router;