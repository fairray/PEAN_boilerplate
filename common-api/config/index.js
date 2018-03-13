require('dotenv').config();

const config = {
    production: {

    },
    development: {
        crowdCreds: {
            baseUrl: 'localhost',
            appName: 'test'
        },
        tir: {
            baseUrl: 'localhost'
        },
        advego: {
            host: 'api.advego.com',
            port: 443,
            path: '/xml',
            token: ''
        } 
    },
    test: {

    }
}

module.exports = config[process.env.NODE_ENV];