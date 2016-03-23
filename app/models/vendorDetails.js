var mongoose = require('mongoose');

var VendorDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    items: {
        gear: [{
            name: String,
            arm: Number,
            credits: Number,
            lvl: Number,
            firearms: Number,
            stamina: Number,
            electronics: Number,
            major: String,
            minor: String,
            skill: String
        }]
    }
});

var VendorDetails = mongoose.model('VendorDetail', VendorDetailsSchema);

module.exports = {
    VendorDetails: VendorDetails
}