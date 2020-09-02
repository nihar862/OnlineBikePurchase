var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: {type:String},
    email: {type:String},
    password: {type:String},
    contact: {type:String},
    address: {type:String}
})

var User = module.exports = mongoose.model('User', userSchema);