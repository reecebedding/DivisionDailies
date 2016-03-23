var ensureAuthenticated = require('../../utils/authHelper.js').ensureAuthenticated;
var ensureAuthorised = require('../../utils/authHelper.js').ensureAuthorised;

var VendorDetails = require('../models/vendorDetails.js').VendorDetails;

(function(controllers){
    controllers.init = function(app){
        app.get('/admin/', ensureAuthenticated, ensureAuthorised('admin'), (req, res) => {
            res.render("admin/index")
        });   
        
        app.post('/admin/api/vendor', ensureAuthenticated, ensureAuthorised('admin'), (req, res) => {
            var newVendor = new VendorDetails(req.body);
            newVendor.save(function(err){
               if (err) {
                   console.log('Unable to add new vendor: ' + err);
                   res.status(500).send('Unable to add new vendor.');
               }else{
                   return res.status(200).send('Created');
               } 
            });
        });
    }
})(module.exports);