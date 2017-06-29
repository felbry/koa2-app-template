const user = require('../model/user');

module.exports = {
    async login (ctx, next) {
        var result = await user.find();
        if (!result.code) {
            ctx.body = result;
        } else {
            ctx.throw(500, 'Database operation failed', result.msg);
        }
    },
    async register (ctx, next) {

    },
    async getInfo (ctx, next) {
       
    }
}