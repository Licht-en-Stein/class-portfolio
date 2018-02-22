var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginSchema = new Schema({

   email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});


var Login = mongoose.model('users', loginSchema);
module.exports = Login;

/*
var EditSchema = new Schema({
  username: String,
  password: String,
  email:String,
  likedin: String,
  github:String
});

var Edit = mongoose.model('edit', EditSchema);
module.exports = Edit;
*/

