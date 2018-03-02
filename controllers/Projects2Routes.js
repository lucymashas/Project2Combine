
// Node Dependencies
var express = require('express');
var router = express.Router();
var models = require('../models'); // Pulls out the Burger Models

var expressValidator = require('express-validator');
var passport = require('passport');
var bcrypt = require('bcrypt');
const saltRounds = 10;

// var logdb = require("../config/connection.js");


// Extracts the sequelize connection from the models object
var sequelizeConnection = models.sequelize;

// Sync the tables
sequelizeConnection.sync


// Create routes
// ----------------------------------------------------

// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/login');
  // res.redirect('login',{title: 'Login'});
});
router.get("/login", function(req, res) {
  res.render('login', {title: 'Login'});
});

router.get('/detail', function (req, res) {
        models.items.findAll( {
      //   group: models.items.loc
        }).then(function(data){
          // Pass the returned data into a Handlebars object and then render it
          var hbsObject = { title: 'Locations', items: data }
          res.render('detail', hbsObject);
      }) 
})

// router.get('/index', function (req, res) {
  router.get("/home", authenticationMiddleware(),
  function(req, res) {
      models.loc.findAll({

        }).then(function(data){
          // Pass the returned data into a Handlebars object and then nder it
          var hbsObject = { title: 'Locations', items: data }
          res.render('index', hbsObject);
      })
      // models.items.findAll({
      //   group: models.items.loc

      //   }).then(function(data){
      //     // Pass the returned data into a Handlebars object and then render it
      //     var hbsObject = { title: 'Locations', items: data }
      //     res.render('index', hbsObject);
      // })


});
router.post("/login", passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/login'
}));

router.get('/logout', function(req,res){
  req.logout();
  req.session.destroy();
  res.redirect('/')
        
});
  
router.get("/register",function(req,res){
  res.render('register',{title: 'Registration'});
});

router.post("/register", function(req, res) {
    req.checkBody('username','Username field cannot be empty.').notEmpty();
    req.checkBody('username','Username must be between 4-15 characters long.').len(4,15);
    req.checkBody('email','The email you entered is invalid, Try Again.').isEmail();
    req.checkBody('email','Email address must be between 4-100 characters long').len(8,100);
    req.checkBody('password','Password must be at least 8 characters long.').len(8,100);
    // req.checkBody('password','Password must include one lowercase character, one uppercase character, a number, and a special character.').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*)(?=.*[^a-zA-Z0-9]).{8,}$/,"i");
    // req.checkBody('passwordMatch','Password must be at least 8 characters long.').len(8,100);
    // req.checkBody('passwordMatch','Password does not match, try again.').equals(password);
    const errors = req.validationErrors();
    if (errors){
      //  console.log(`errors: ${JSON.stringify(errors)}`);
       res.render('register',{
         title: "Registration Error",
         errors: errors
        });
    } else
    {
      const username = req.body.username;
      const email = req.body.email;
      const password= req.body.password;
      
      bcrypt.hash(password, saltRounds, function(err, hash) {
          models.user.findOne({where: {username:username}}).then(function(user) {
            if (user) {
              res.render('register',{
                errors: "The username is already taken",
                title: "Registration Error",
              })
            }else
              models.user.create({username:username,email:email,password:hash}).then(function(user){
              if (!user) {
                  return done(null,false);
              } 
          
              const user_id = user.dataValues.id;
              req.login(user_id, function(err){
                res.redirect('/home');
              });           
            });
          })
      })
    }
});


passport.serializeUser(function(user_id,done){
  done(null,user_id);
});
passport.deserializeUser(function(user_id,done){
  done(null,user_id);
});

function authenticationMiddleware(){
  return (req,res,next) =>{
    console.log(`
       req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
       if (req.isAuthenticated()) return next();
       res.redirect('/login')
  }
}



// Export routes
module.exports = router;