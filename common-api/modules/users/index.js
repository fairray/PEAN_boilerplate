const express = require('express');
const userCtrl = require('./controller');

const router = express.Router();

router.get('/', userCtrl.find);
router.get('/:id', userCtrl.findById);


module.exports = (app) => {
  app.use('/users', router);
};
