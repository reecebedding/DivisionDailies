var mongoose = require('mongoose');

var WeaponDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    Type: String,
    DPS: Number,
    Credits: Number,
    LVL: Number,
    DMG: Number,
    RPM: Number,
    MAG: Number,
    Talent: String
});

var WeaponDetails = mongoose.model('WeaponDetail', WeaponDetailsSchema);

module.exports = {
    WeaponDetails: WeaponDetails
}