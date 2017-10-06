const sequelize = require('./connection');
const tables = {
    user: require('./user'),
    admin: require('./admin'),
};

const config = require('../config');
const encryption = require('../tools/encryption');

// init table and data
sequelize.sync().then(() => {
    tables.admin.findAll().then(v => {
        if (!v.length) {
            tables.admin.create({
                username: 'felbry',
                password: encryption(config.defaultPwd)
            });
        }
    });
}).catch(e => { console.error(e); });

module.exports = tables;