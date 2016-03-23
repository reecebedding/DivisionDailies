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
        }],
        weapons: [{
            name: String,
            weaponType: String,
            dps: Number,
            credits: Number,
            dmg: Number,
            rpm: Number,
            mag: Number,
            talent: String
        }],
        mods: [{
            name: String,
            credits: Number,
            major: String
        }]
    }
});

var VendorDetails = mongoose.model('VendorDetail', VendorDetailsSchema);

module.exports = {
    VendorDetails: VendorDetails
}