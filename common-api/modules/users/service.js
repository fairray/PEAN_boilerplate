const BaseService = require('../base/service');
const validation = require('./validation');
const model = require('./model');
const util = require('util');

class UserService extends BaseService{
    constructor(model, validation){
        super(model, validation);
        this.fetch = this.fetch.bind(this);
    }
    async fetch(data = {}, opt = {}){
        return this.validation.fetch(data)
            .then(() => this.model.where({}).fetch(opt))
    }
}

module.exports = new UserService(model, validation);
