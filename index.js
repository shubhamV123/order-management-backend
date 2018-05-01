var _ = require("lodash");
var express = require("express");
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');

var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');
var router = express.Router();
var cors = require('cors')

var app = express();
global.__root   = __dirname + '/'; 

//Middlewares
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);
//Routes
app.get("/", function(req, res) {
  res.json({message: "Express is up!"});
});
const port = process.env.PORT || 4000;

app.listen(port, function() {
  console.log("Express running");
});
