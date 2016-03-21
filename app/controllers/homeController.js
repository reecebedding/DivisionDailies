(function(controllers){
    controllers.init = function(app){
       app.get('/', (req, res) => {
           res.render('index/index', {
               
           })
       })
    }
})(module.exports);