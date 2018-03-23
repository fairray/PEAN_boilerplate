const express = require('express');
const jobsCtrl = require('./controller');

const router = express.Router();

//router.get('/', jobsCtrl.read);
//router.get('/:id', jobsCtrl.readOne);

module.exports = (app) => {
  app.use('/jobs', router);
};
