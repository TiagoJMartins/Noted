var Note = require('../models/Note');

// 'note' is an object with 'content' as a property.
// These functions have callbacks integrated in them for asynchronous usage.

module.exports.createNote = function(note, cb) {

  var newNote = new Note();
  newNote.content = note.newNote;
  newNote.save(function(err, succ) {
    if (err) {
      return cb(err);
    }
    return cb(err);
  });

};

module.exports.updateNote = function(id, cb) {

};

module.exports.deleteNote = function(id, cb) {

};

module.exports.getNotes = function(cb) {

  Note.find({}, function(err, data) {
    if (err) {
      return cb(err);
    }
    return cb(err, data);
  });

};
