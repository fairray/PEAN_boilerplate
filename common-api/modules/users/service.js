const BaseService = require('../base/service');
const validation = require('./validation');
const model = require('./model');

class UserService extends BaseService{
    constructor(model, validation){
        super(model, validation);
        this.fetch.bind(this);
    }
    async fetch(data = {}, opt = {}){
        return this.validation.read(data)
            .then(this.model.fetch)
    }
}

module.exports = new UserService(model, validation);
