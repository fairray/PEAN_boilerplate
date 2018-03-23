const express = require('express');
const ordersCtrl = require('./controller');

const router = express.Router();

router.get('/', ordersCtrl.find);
router.get('/:id', ordersCtrl.findById);

module.exports = (app) => {
  app.use('/orders', router);
};
