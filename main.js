const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const recipe = require('./app/controllers/project.controller.js');

// create express app
const app = express();
const router = express.Router();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
app.use("/", router);

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

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
