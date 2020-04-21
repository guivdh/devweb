const express = require('express');
const router = express.Router();

const mailCtrl = require('../controllers/mail');

const auth = require('../middleware/auth');

router.post('/', auth, mailCtrl.sendMail);

module.exports = router;