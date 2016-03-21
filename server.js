'use strict';

var express = require('express');
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;
var app = express();

var controllers = require('./app/controllers');
controllers.init(app);


app.set('views', __dirname + '/app/views/');
app.set('view engine', 'vash');

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log('The DivisionDailies started on port ' + port);
});

mongoose.connect('mongodb://localhost', function(err){
    if(err){
        console.log(err);   
    }
});