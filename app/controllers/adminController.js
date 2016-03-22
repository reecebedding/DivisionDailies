var ensureAuthenticated = require('../../utils/authHelper.js').ensureAuthenticated;
var ensureAuthorised = require('../../utils/authHelper.js').ensureAuthorised;

(function(controllers){
    controllers.init = function(app){
        app.get('/admin/', ensureAuthenticated, ensureAuthorised('admin'), (req, res) => {
            res.render("admin/index")
        });
    }
})(module.exports);