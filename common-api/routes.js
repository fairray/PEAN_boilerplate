const express = require('express');
const user = require('./modules/users');

const init = (app) => {
    app.use(user);
}
module.exports = {
    init
}