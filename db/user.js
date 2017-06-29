const Sequelize = require('sequelize');
const sequelize = require('./connection');

const User = sequelize.define('user', {
    name: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
});

module.exports = User;