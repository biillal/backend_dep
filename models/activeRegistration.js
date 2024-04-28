const mongoose = require('mongoose');


const activeRegister = mongoose.Schema({
    active : {
        type:Boolean,
        default:false
    }
},{timestamps:true});


const ActiveRegistation = mongoose.model('activeRegistration',activeRegister);

module.exports = {
    ActiveRegistation
}