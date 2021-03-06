var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


var infoSchema = mongoose.Schema({
    donor: {type: String},
    name: {type: String},
    email: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    phone: {type: Number},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    donortype: {type: String},
    food: {type: String},
    time: {type: Date},
    created: Date
    
});

infoSchema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

infoSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('Info', infoSchema);