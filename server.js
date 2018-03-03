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
		var flash = require('connect-flash');

		// Express set upls

		var app = express();
		var PORT = process.env.PORT || 8080;

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

// 		sessions
// var options = {
//   host: "localhost",
//   port: 3000,
//   user: "root",
// 	password: "",
// 	"operatorsAliases": false,
//   database: "ProjectTwo"
// };

// var connection = mysql.createConnection(options); // or mysql.createPool(options);
// var sessionStore = new MySQLStore({}/* session store options */, connection);

//Session  part of express-session, secret could use a random key generator for now I assign a string of characters
app.use(session({
  secret: 'iuytrfghjkl',
  resave: false,
  // store: sessionStore,
  saveUninitialized: false,
  // cookie: { secure: true }
}))

app.use(flash());
//initialize passports - integrate with session
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req,res,next){
  res.locals.isAuthenticated = req.isAuthenticated();
  	next()
})

//passport Local Strategy
passport.use(new LocalStrategy({
	passReqToCallBack : true
},
  function(username,password,done){
		console.log(username);
		console.log(password);
		// Extracts the sequelize connection from the models object
		var db = require("./models");

		db.user.findOne({where: {username:username}}).then(function(user) {
			if (!user) {
				return done(null,false,
					 req.flash('message', 'Invalid unsername address or password'));
			}
			var isValidPassword = function(userpass, password) {
				return bCrypt.compareSync(password, userpass);
					}
					if (isValidPassword){
						return done(null,{user_id:  user.dataValues.id})
					}else{
						return done(null,false, 
							req.flash('message','Authentication Failed'));
					}
			})
		}
	))

app.use(expressValidator());


	// Import routes and give the server access to them.
	var router = require("./controllers/Projects2Routes.js");
	app.use('/',router);		

		// Syncing our sequelize models and then starting our express app
		db.sequelize.sync({ force: false })
			.then(function() {
		  		app.listen(PORT, function() {
		    	console.log("App listening on PORT " + PORT);
		  });
		});
