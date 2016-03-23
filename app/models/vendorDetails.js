var mongoose = require('mongoose');

var VendorDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    items: {
        gear: [{
            name: String,
            ARM: Number,
            Credits: Number,
            LVL: Number,
            FireArms: Number,
            Stamina: Number,
            Electronics: Number,
            Major: String,
            Minor: String,
            Skill: String
        }]
    }
});

var VendorDetails = mongoose.model('VendorDetail', VendorDetailsSchema);

module.exports = {
    VendorDetails: VendorDetails
}