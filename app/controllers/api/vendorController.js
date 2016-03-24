var VendorDetails = require('../../models/vendorDetails.js').VendorDetails;

(function(controllers){
    controllers.init = function(app){
        app.get('/api/vendor', (req, res) => {
            VendorDetails.find({}, function(err, docs){
               if(err){
                   console.log('An error occured: ' + err);
                   res.status(500).send('An error occured.');
               }else{
                   res.json(docs);
               }
           })
        });
    }
})(module.exports);