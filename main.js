const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
// const recipe = require('./app/controllers/project.controller.js');
const Login = require('./app/models/loginDatabase-Schema.js');
// const Edit = require('./app/models/editDatabase-Schema.js');

// create express app
const app = express();
const router = express.Router();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
app.use("/", router);

const dbConfig = require('./app/config/database.config.js');
mongoose.connect(dbConfig.url);


mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

const port = 3000;

app.use('/assets', express.static(path.join(__dirname, 'app/views/assets')));

// define a simple route
router.get('/api', (req, res) => {
  res.json({ 'message': 'Welcome to Your Project application REST-ful API.' });
});

// Web
router.get("/", (req, res) => {
  res.sendFile('index.html', { root: 'app/views' })
});

router.post('/login', (req, res) => {
	console.log(req.body.email)

  if(!req.body.email || !req.body.password)
      return res.json({ err: 'username and password required'});

  else{
      //use schema.create to insert data into the db
    Login.find({"email":req.body.email}, (err, user) => {
        if (err) {
          return res.json({error:"incorect email"})
        } else {
          if (user[0].email === req.body.email && user[0].password === req.body.password) {
<<<<<<< HEAD
            return res.json(user)
=======
              console.log("it is working")
            return res.status(200).send({message: `Welcome "Undefined" ${user[0].username}`});
>>>>>>> c59ca1166f0cc1f9f89dc6d430656469232715c6
          }

            else{
              if (user[0].email !== req.body.email && user[0].password !== req.body.password) {
            res.status(500).send({message: "Some error ocuured while retrieving users"});
          }
          }
        }
        });
      } 
})
router.post('/register', (req, res) => {
      if(!req.body) {
        res.status(400).send({message: "user can not be empty"});
    }

     newUser = new Login(req.body);
      newUser.save(function(err) {
        if(err) {
          return res.send(err);
        }
        
        return res.send({message: "use created successfully!"})
    });


})

router.get('/portfolio', (req, res) => {
    // Retrieve and return all students from the database.
    Login.find(function(err, users){
        if(err) {
            res.status(500).send({message: "Some error ocuured while retrieving users"});
        } else {
            res.send(users);
        }
    });
    
});

router.delete('/delete/:userId', (req, res) => {
    // Retrieve and return all students from the database.
    Login.remove({_id: req.params.userId},function(err, users){
        if(err) {
            res.status(500).send({message: "Some error ocuured while retrieving users"});
        } else {
            res.send(users);
        }
    });
    
});

router.put('/edit', (req, res) => {
    
});





// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
