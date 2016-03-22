var homeController = require('./homeController.js');
var authController = require('./authController.js');
var adminController = require('./adminController.js');

(function(controllers){
    controllers.init = function(app){
        homeController.init(app);
        authController.init(app);
        adminController.init(app);
    }
})(module.exports);