const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const adminschema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    lastname:{
        type:String,
        required:[true,"lastname is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    isAdmin:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

adminschema.methods.generateAuthToken = function(){
    return jwt.sign({id:this._id , isAdmin:this.isAdmin},process.env.SECRET_KEY)
}

adminschema.pre('save',async function (next) {
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

const Admin = mongoose.model('admin',adminschema)

module.exports = {
    Admin
}