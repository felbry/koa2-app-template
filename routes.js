const Router = require('koa-router');
const publicApi = Router({ prefix: '/api' });
const privateApi = Router({ prefix: '/api' });

const user = require('./controller/user');

module.exports.publicApi = publicApi
    .post('/v1/login', user.login)
    .post('/v1/register', user.register)

module.exports.privateApi = privateApi
    // 登录获取基本信息
    .get('/v1/information', user.getInfo)
    .get('/admin/v1/information', user.getInfo)