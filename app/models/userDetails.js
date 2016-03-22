var mongoose = require('mongoose');

var UserDetailsSchema = new mongoose.Schema({
    userName: {
        type: String,
        index: true
    },
    userId: Number,
    roles: [String]
});

var UserDetails = mongoose.model('UserDetails', UserDetailsSchema);

module.exports = {
    UserDetails: UserDetails
}