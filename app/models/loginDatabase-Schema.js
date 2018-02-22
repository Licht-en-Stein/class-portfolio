var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginSchema = new Schema({
  username: String,
  password: String,
  email:String,
  likedin: String,
  githubname:String,
  position :String
});


var Login = mongoose.model('users', loginSchema);
module.exports = Login;



