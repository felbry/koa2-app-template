const jwt = require('jsonwebtoken');

const Admin = require('../db/admin');

const encryption = require('../tools/encryption');
const config = require('../config');

module.exports = {
    async login (opts) {
        let results = await Admin.findAll({
            where: {
                username: opts.username,
                password: encryption(opts.password)
            },
        }).then(v => v);

        if (results.length) {
            let admin = JSON.parse(JSON.stringify(results[0]));
            return {
                code: 0,
                data: {
                    token: jwt.sign(admin, config.adminKey, {
                        expiresIn: '24h'
                    })
                }
            };
        } else {
            return {
                code: 1,
                msg: '用户名或密码错误'
            };
        }
    },
}