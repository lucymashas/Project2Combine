
// Node Dependencies
var express = require('express');
var router = express.Router();
var models = require('../models'); // Pulls out the Burger Models

var expressValidator = require('express-validator');
var passport = require('passport');
var bcrypt = require('bcrypt');
const saltRounds = 10;

// Extracts the sequelize connection from the models object
var sequelizeConnection = models.sequelize;

// Sync the tables
sequelizeConnection.sync


// Create routes
// ----------------------------------------------------

// Index Redirect
router.get("/", function(req, res) {
  res.render('login',{title: 'Personal Assets Login'});
  // res.render('index');
});

router.get("/", function(req, res) {
  res.render('login',{title: 'Personal Assets Login'});
  // res.render('index');
});

  router.get("/home", authenticationMiddleware(),
    function(req, res) {
      models.Loc.findAll({
      }).then(function(data){
        // Pass the returned data into a Handlebars object and then render it
        var hbsObject = { title: 'Locations', homebox: 'Loc', items: data }
        res.render('index', hbsObject);
    })
});

  router.get('/button1', function(req, res) {          
    models.Loc.findAll({
      }).then(function(data){
        // Pass the returned data into a Handlebars object and then render it
        var hbsObject = { title: 'Locations', homebox: 'Loc', items: data }
        res.render('index', hbsObject);
    })
  })

  router.get('/button2', function(req, res) {           
    models.Prodtype.findAll({
      }).then(function(data){
        // Pass the returned data into a Handlebars object and then render it
        var hbsObject = { title: 'Product Types', homebox: 'PT', items: data }
        res.render('index', hbsObject);
    })
  })

  router.get('/button3', function(req, res) {
    models.Member.findAll({
      }).then(function(data){
        // Pass the returned data into a Handlebars object and then render it
        var hbsObject = { title: 'Owners', homebox: 'Mem',  items: data }
        console.log(hbsObject)
        res.render('index', hbsObject);
    })
})


router.post('/login', passport.authenticate(
  'local', {
      successRedirect: '/home',
      failureRedirect: '/'
}));

router.get('/logout', function(req,res){
  req.logout();
  req.session.destroy();
  res.redirect('/')
});
  
router.get("/register",function(req,res){
  res.render('register',{title: 'Personal Assets Registration'});
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

router.get('/detail/:menu/:location', function (req, res) {
  var menu = req.params.menu;
  var location = req.params.location;

  if(menu=='Loc') {
        models.Item.findAll({
          where: {
            Loc: req.params.location
          }

          }).then(function(data){
            // Pass the returned data into a Handlebars object and then render it
            var hbsObject = { title: 'Locations', homebox: 'Mem' , Items: data }
            res.render('detail', hbsObject);
      })
  }

  if(menu=='PT') {
        models.Item.findAll({
          where: {
            Prodtype: req.params.location
          }

          }).then(function(data){
            // Pass the returned data into a Handlebars object and then render it
            var hbsObject = { title: 'Product Type', homebox: 'PT' , Items: data }
            res.render('detail', hbsObject);
      })
  }

  if(menu=='Mem') {
        models.Item.findAll({
          where: {
            Member: req.params.location
          }

          }).then(function(data){
            // Pass the returned data into a Handlebars object and then render it
            var hbsObject = { title: 'Member', homebox: 'Mem' , Items: data }
            res.render('detail', hbsObject);
      })
  }
});


passport.serializeUser(function(user_id,done){
  done(null,user_id);
});
// deserialize user 
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