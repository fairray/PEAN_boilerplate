const express = require('express');
const userCtrl = require('./controller');

const router = express.Router();

router.get('/', userCtrl.find);


module.exports = (app) => {
  app.use('/users', router);
};
