var homeController = require('./homeController.js');

(function(controllers){
    controllers.init = function(app){
       homeController.init(app);
    }
})(module.exports);