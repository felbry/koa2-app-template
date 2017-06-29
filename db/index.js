const sequelize = require('./connection');
const tables = {
    user: require('./user'),
    admin: require('./admin'),
};

// init table and data
sequelize.sync().then(() => {
    tables.admin.findAll().then(v => {
        if (!v.length) {
            tables.admin.create({
                username: 'felbry',
                password: '123'
            });
        }
    });
}).catch(e => { console.error(e); });

module.exports = tables;