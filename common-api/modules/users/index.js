const express = require('express');
const userCtrl = require('./controller');

const router = express.Router();

router.get('/', userCtrl.read);

module.exports = router;