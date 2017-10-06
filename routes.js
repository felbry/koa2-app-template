const Router = require('koa-router');
const publicApi = Router({ prefix: '/api' });
const privateApi = Router({ prefix: '/api' });
const adminApi = Router({ prefix: '/admin/api' });

const user = require('./controller/user');
const admin = require('./controller/admin');

module.exports.publicApi = publicApi
    .post('/login', user.login)
    .post('/login-for-admin', admin.login)
    .post('/register', user.register)

module.exports.privateApi = privateApi
    // 用户私有接口

module.exports.adminApi = adminApi
    // 管理员私有接口