const Sequelize = require('sequelize');
const sequelize = require('./connection');

const Admin = sequelize.define('admin', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
});

module.exports = Admin;