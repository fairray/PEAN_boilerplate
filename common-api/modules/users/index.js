const express = require('express');
const userCtrl = require('./controller');

const router = express.Router();

router.get('/', userCtrl.read);
router.get('/:id', userCtrl.readOne);

module.exports = (app) => {
<<<<<<< HEAD
    app.use('/users', router)
};
=======
  app.use('/users', router);
};
>>>>>>> feature/base_
