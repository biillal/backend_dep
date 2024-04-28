const mongoose = require('mongoose')


const downloadSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"]
    },
    file:String
},{timestamps:true})



const Download = mongoose.model('download',downloadSchema)
module.exports = {
    Download
}