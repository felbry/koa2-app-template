const Sequelize = require('sequelize');
const config = require('../config');
const db = config.db;

module.exports = new Sequelize(db.db, db.user, db.pw, db.option);