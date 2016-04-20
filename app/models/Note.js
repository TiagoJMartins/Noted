var mongoose = require('mongoose');

var noteSchema = mongoose.Schema({
  content: String
});

module.exports = mongoose.model('Note', noteSchema);
