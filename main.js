const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
// const recipe = require('./app/controllers/project.controller.js');
const Login = require('./app/models/database-Schema.js');
 //const Edit = require('./app/models/database-Schema.js').Edit;

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

router.post('/api/login', (req, res) => {
	console.log(req.body.email)

  if(!req.body.email || !req.body.password)
      return res.json({ err: 'username and password required'});

  else{
      //use schema.create to insert data into the db
    Login.find({"email":req.body.email}, (err, user) => {
          console.log("the user   ////" + user)
        if (err) {
          console.log("error finding the email " + err)
          return res.json({error:"incorect email"})
        } else {
            console.log("the user " + user + "the rest" +user[0].email+"// "+ user[0].password )
          if (user[0].email === req.body.email && user[0].password === req.body.password) {
              console.log("it is working")
            return res.json(user)
          }
            else{
                   console.log("it is not")
              return res.json({error:"incorect password"})
            }
          }
        });
      } 
})

router.put('/edit', (req, res) =>{
	
})

router.get('/portfolio', (req, res) => {






	
 	
})



// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
