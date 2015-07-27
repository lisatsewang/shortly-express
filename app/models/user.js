var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');


// eventually do some encryption
var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true
});

module.exports = User;