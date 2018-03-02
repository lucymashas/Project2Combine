
		var express = require("express");
		var bodyParser = require("body-parser");
		var methodOverride = require('method-override')
		var mysql = require('mysql2');
		var exphbs = require("express-handlebars");
		var expressValidator = require('express-validator');
		var passport = require('passport')
	
		//Authentication Package
		var session = require('express-session');
		var password = require('passport');
		var LocalStrategy = require('passport-local').Strategy;
		var MySQLStore = require('express-mysql-session')(session);
		var bcrypt = require('bcrypt');

		// Express set up

		var app = express();
		var PORT = process.env.PORT || 3000;

		// Serve static content for the app from the "public" directory
		app.use(express.static("./public"));

		// Requiring our models for syncing
		var db = require(__dirname + '/models');

		// parse application/x-www-form-urlencoded
		app.use(bodyParser.urlencoded({ extended: false }));

		// parse application/json
		app.use(bodyParser.json());

		// Set Handlebars.
		var exphbs = require("express-handlebars");
		app.engine("handlebars", exphbs({ defaultLayout: "main" }));
		app.set("view engine", "handlebars");

		// sessions
var options = {
  host: "localhost",
  port: 3000,
  user: "root",
  password: "",
  database: "ProjectTwo"
};

var connection = mysql.createConnection(options); // or mysql.createPool(options);
var sessionStore = new MySQLStore({}/* session store options */, connection);

//Session  part of express-session, secret could use a random key generator for now I assign a string of characters
app.use(session({
  secret: 'iuytrfghjkl',
  resave: false,
  store: sessionStore,
  saveUninitialized: false,
  // cookie: { secure: true }
}))
//initialize passports - integrate with session
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req,res,next){
  res.locals.isAuthenticated =req.isAuthenticated();
  next()
})

// var logdb = require("./config/connection.js");
// Extracts the sequelize connection from the models object
// var sequelizeConnection = models.sequelize;

passport.use(new LocalStrategy(
	function(username,password,done){
		console.log(username);
		console.log(password);
	}
));

app.use(expressValidator());


		// Import routes and give the server access to them.
		var router = require("./controllers/Projects2Routes.js");
		app.use('/',router);		
		// require("./controllers/signon.js")(app);		

		// Syncing our sequelize models and then starting our express app
		db.sequelize.sync({ force: false })
			.then(function() {
		  		app.listen(PORT, function() {
		    	console.log("App listening on PORT " + PORT);
		  });
		});
