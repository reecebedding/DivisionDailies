var mongoose = require('mongoose');

var SkinDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    LVL: Number
});

var SkinDetails = mongoose.model('SkinDetail', SkinDetailsSchema);

module.exports = {
    SkinDetails: SkinDetails
}