var homeController = require('./homeController.js');
var authController = require('./authController.js');
var adminController = require('./adminController.js');

var apiVendorController = require('./api/vendorController.js');

(function(controllers){
    controllers.init = function(app){
        homeController.init(app);
        authController.init(app);
        adminController.init(app);
        apiVendorController.init(app);
    }
})(module.exports);