const mongoose = require('mongoose')

const database = async() =>{
    try {
        await mongoose.connect(process.env.URL)
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = database