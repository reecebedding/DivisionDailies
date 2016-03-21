var mongoose = require('mongoose');

var ItemDetailSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true
    }
});

var ItemDetails = mongoose.model('ItemDetail', ItemDetailSchema);

module.exports = {
    ItemDetails: ItemDetails
}