const crypto = require('crypto');
const config = require('../config');

module.exports = function encryption (content) {
    let md5 = crypto.createHash('md5');
    md5.update(md5.update('' + content) + config.encryMixing);
    
    return md5.digest('hex');
}