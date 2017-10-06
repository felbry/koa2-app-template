const jwt = require('jsonwebtoken');

const User = require('../db/user');

const encryption = require('../tools/encryption');
const config = require('../config');

module.exports = {
    async insert (opts) {
        let username = opts.username,
            password = opts.password;
        let results = await User.findAll({
            where: {
                username: username
            }
        }).then(v => v);

        if (!results.length) {
            return User.create({
                username: username,
                password: encryption(password)
            }).then(v => {
                return {
                    code: 0,
                    data: v
                };
            });
        } else {
            return {
                code: 1,
                msg: '已注册'
            };
        }
    },
    async login (opts) {
        let results = await User.findAll({
            where: {
                username: opts.username,
                password: encryption(opts.password)
            }
        }).then(v => v);

        if (results.length) {
            let user = results[0];
            return {
                code: 0,
                data: {
                    token: jwt.sign({
                        id: user.id,
                    }, config.userKey, {
                        expiresIn: '3 days'
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