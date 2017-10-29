const crypto = require('crypto').randomBytes(256).toString('hex');


module.exports = {
uri: 'mongodb://localhost:27017/new_mean_angular2',
secret: crypto,
db: 'new_mean_angular2'

}
