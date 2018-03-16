const path = require('path');
const { createLogger, transports } = require('winston');

const rootPath = path.normalize(__dirname + '/../');
const logsFolder = path.resolve(path.normalize(`${rootPath}/logs/`));

const logger =  createLogger({
    transports: [
        new transports.File({
            level: 'info',
            filename: path.normalize(`${logsFolder}/combine-logs.log`),
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new transports.File({
            level: 'error',
            filename: path.normalize(`${logsFolder}/error-logs.log`),
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new transports.Console({
            level: 'debug',
            handleExceptions: true,
            colorize: true
        }), 
    ]
})
logger.emitErrs = true;
module.exports = logger;