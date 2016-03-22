var crypto = require('crypto');
var passport = require('passport');
var authHelper = require('../../utils/authHelper.js');

(function(controllers){
    controllers.init = function(app){
       app.get('/login', (req, res) => {
            res.render("authentication/login");
       })
       
       app.get('/login/reddit', function(req, res, next){
           req.session.state = crypto.randomBytes(32).toString('hex');
           passport.authenticate('reddit', {
               state: req.session.state,
               duration: 'permanent'
           })(req, res, next);
       });
       
       app.get('/login/reddit/callback', (req, res, next) => {
           if (req.query.state == req.session.state){
                passport.authenticate('reddit', {
                    successRedirect: '/',
                    failureRedirect: '/login'
                })(req, res, next);
            }else{
                console.log('Error: User session and request state are different!');
                res.redirect('/');
            }
       })
    }
})(module.exports);