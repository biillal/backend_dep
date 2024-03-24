const mongoose = require('mongoose');

const registrationShema = mongoose.Schema({
    nom: {
        type: String,
        required: [true, "nom is require"]
    },
    prenom: {
        type: String,
        required: [true, "prenom is require"]
    },
    institution: {
        type: String,
        required: [true, "institution is require"]
    },
    institutionAddress: {
        type: String,
        required: [true, "institution Address is require"]
    },
    ville: {
        type: String,
        required: [true, "Ville  is require"]
    },
    phone: {
        type: String,
        required: [true, "Phone   is require"]
    },
    email: {
        type: String,
        required: [true, "email  is require"]
    },
},{timestamps:true})

const Registration = mongoose.model('registration', registrationShema);

module.exports = {
    Registration
}