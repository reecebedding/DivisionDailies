var GearDetails = require('../models/gearDetails.js').GearDetails;

(function(controllers){
    controllers.init = function(app){
       app.get('/', (req, res) => {
           GearDetails.find({}, function(err, docs){
               if(err){
                   console.log('An error occured: ' + err);
                   res.render('shared/error500.vash');
               }else{
                   res.render('index/index', {data: docs});
               }
           })
       })
    }
})(module.exports);