const mongoose = require('mongoose');


const committeesShema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    role:{
        type:String,
    },
    univ:{
        type:String,
        
    },
    gender:{
        type:String,
    },
    categoryCmt:{
        type:String,
        required:[true,"categories of committes is required"]
    }
},{timestamps:true})

const Committees = mongoose.model('committee',committeesShema)

module.exports = Committees