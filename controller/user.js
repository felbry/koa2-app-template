const user = require('../model/user');

module.exports = {
    async login (ctx, next) {
        let result = await user.login(ctx.request.body.fields);
        ctx.body = result;
    },
    async register (ctx, next) {
        let result = await user.insert(ctx.request.body.fields);
        ctx.body = result;
    },
}