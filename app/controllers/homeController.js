var VendorDetails = require('../models/vendorDetails.js').VendorDetails;

(function(controllers){
    controllers.init = function(app){
        app.get('/', (req, res) => {
            VendorDetails.find({}, function(err, docs){
               if(err){
                   console.log('An error occured: ' + err);
                   res.render('shared/error500.vash');
               }else{
                   res.render('index/index', { data: docs , user: req.user});
               }
           })
        })
    }
})(module.exports);