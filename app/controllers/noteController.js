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

module.exports.getNotes = function(cb) {
  Note.find({}, function(err, data) {
    if (err) {
      return cb(err);
    }
    return cb(err, data);
  });
};

module.exports.updateNote = function(id, newData, cb) {
  Note.update({_id: id}, {content: newData}, function(err) {
    if (err) {
      return cb(err);
    }
    return cb(err);
  });
};

module.exports.deleteNote = function(id, cb) {
  Note.remove({_id: id}, function(err) {
    if (err) {
      return cb(err);
    }
    return cb(err);
  });
};
