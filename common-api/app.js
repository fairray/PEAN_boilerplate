const express = require('express');
const logger = require('./core/logger');
const Users = require('./models/users');

const app = express();


app.get('/', (req, res, next) => {
    Users
        .getUser({ name:'test1'})
        .then((user)=>{
            res.json(user);
        })
        .catch(err=> next(err))
   // logger.info('Now my debug messages are written to console!');
    //res.end('responce');
    
})

app.use(NotFoundHandler);
app.use(logErrors);
app.use(clientErrorHandler);

function NotFoundHandler(req, res, next){
    res.status(404);
    next(new Error('Not found'))
}

function logErrors(err, req, res, next) {
    logger.error(err.stack);
    next(err);
}

function clientErrorHandler(err, req, res, next) {
    res.status = res.statusCode || 500;
    res
        .send({ error: 'Something failed!' });
}
  


module.exports = app;