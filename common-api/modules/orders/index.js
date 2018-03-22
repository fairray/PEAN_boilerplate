const express = require('express');
const ordersCtrl = require('./controller');

const router = express.Router();

router.get('/', ordersCtrl.read);
router.get('/:id', ordersCtrl.readOne);

module.exports = (app) => {
  app.use('/orders', router);
};
