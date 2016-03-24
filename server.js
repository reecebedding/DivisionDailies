'use strict';

var express = require('express');
var app = express();

var passport = require('passport');
var RedditStrategy = require('passport-reddit').Strategy;
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var i18n = require('i18n');

i18n.configure({
    locales:['en'],
    directory:__dirname + '/locales'
})

//configuration session and passport
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
passport.use(new RedditStrategy({
    clientID: 'zKwATe5Blb5Ilg',
    clientSecret: 'kfgm0thS9TNG16KJMKx6-s_Ryhs',
    callbackURL: "http://localhost:3000/login/reddit/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));

//setup application configurations
app.set('views', __dirname + '/app/views/');
app.set('view engine', 'vash');

app.use(express.static(__dirname + '/public'));
app.use(i18n.init);
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
    secret: '8568582e-39e0-4e87-8aab-73b7b362462a',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//Initialize controllers / routes
var controllers = require('./app/controllers');
controllers.init(app);

//Start server
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('The DivisionDailies started on port ' + port);
});

//Make database connection
mongoose.connect('mongodb://localhost', function(err){
    if(err){
        console.log(err);   
    }
});
