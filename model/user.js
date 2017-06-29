const User = require('../db/user');

module.exports = {
    find () {
        return User.findAll().then(v => {
            return {
                code: 0,
                data: JSON.stringify(v)
            };
        }).catch(e => { 
            return {
                code: 1,
                msg: e
            }
        });
    }
}