var mongoose = require('mongoose');

var GearDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    Type: String,
    ARM: Number,
    Credits: Number,
    LVL: Number,
    FireArms: Number,
    Stamina: Number,
    Electronics: Number,
    Major: String,
    Minor: String,
    Skill: String
});

var GearDetails = mongoose.model('GearDetail', GearDetailsSchema);

module.exports = {
    GearDetails: GearDetails
}