var noteController = require('./controllers/noteController.js');

module.exports = function(app) {

  // GET ROOT
  app.get('/', function(req, res) {

    noteController.getNotes(function(err, data) {
      if (err) {
        req.flash('info', 'There was an error retrieving the notes!');
        res.render('index', {
          flash: req.flash('info')
        });
      } else {
        res.render('index', {
          flash: req.flash('info'),
          notes: data
        });
      }
    });

  });

  // POST CREATE
  app.post('/create', function(req, res) {
    if (!req.body.newNote.length) {
      req.flash('info', 'Note cannot be empty.');
      res.redirect('/');
    } else if (req.body.newNote.length > 40) {
      req.flash('info', 'Note cannot be over 40 characters.');
      res.redirect('/');
    } else {
      noteController.createNote(req.body, function(err) {
        if (err) {
          req.flash('info', 'There was an error while creating the note!');
          res.redirect('/');
        } else {
        req.flash('info', 'Note created!');
        res.redirect('/');
        }
      });
    }
  });

  // PUT UPDATE
  app.put('/update', function(req, res) {
    // Update an existing note

    req.flash('info', 'Note updated!');
    res.redirect('/');
  });

  // DELETE DELETE
  app.delete('/delete', function(req, res) {
    // Delete an existing note

    req.flash('info', 'Note deleted!');
    res.redirect('/');
  });
};
