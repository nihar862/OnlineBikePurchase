var mongoose = require('mongoose');

var Item = mongoose.Schema({
    name: {type:String},
    contact: {type:String},
    productname: {type:String},
    price: {type:String},
    details: {type:String}
})

var items = module.exports = mongoose.model('Item', Item);