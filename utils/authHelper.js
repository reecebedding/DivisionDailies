module.exports = {
    ensureAuthenticated : function(req, res, next){
        if (req.isAuthenticated()) { return next(); }
        res.redirect('/login');
    },
    ensureAuthorised : function(role){
        
        var UserDetails = require('../app/models/userDetails.js').UserDetails;
        return function(req, res, next){
            UserDetails.find({ username : req.user.name, roles : role }, function(err, docs){
                if(docs.length > 0){
                    return next();
                }
                res.render('../../app/views/shared/error401.vash');
            })   
        }
    }
};