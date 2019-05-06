var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var university = new Schema({
  name: {type: String},
  category: {type: String},
  location: {type: String},
  logo: {type: String}
});

module.exports = mongoose.model('University', university);
