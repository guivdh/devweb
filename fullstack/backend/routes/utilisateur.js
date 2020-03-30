const express = require('express');
const router = express.Router();

const utilisateurCtrl = require('../controllers/utilisateur');

const auth = require('../middleware/auth');

router.get('/', auth, utilisateurCtrl.getUtilisateur);
router.get('/:id', auth, utilisateurCtrl.getIdUtilisateur);
router.post('/', auth, utilisateurCtrl.createUtilisateur);
router.put('/', auth, utilisateurCtrl.updateUtilisateur);
router.delete('/', auth, utilisateurCtrl.deleteUtilisateur);
router.post('/signup', auth, utilisateurCtrl.createUtilisateur);
router.post('/login', utilisateurCtrl.login);

module.exports = router;