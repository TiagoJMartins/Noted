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
      }
      else {
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
    }
    else if (req.body.newNote.length > 40) {
      req.flash('info', 'Note cannot be over 40 characters.');
      res.redirect('/');
    }
    else {
      noteController.createNote(req.body, function(err) {
        if (err) {
          req.flash('info', 'There was an error while creating the note!');
          res.redirect('/');
        }
        else {
          res.redirect('/');
        }
      });
    }
  });

  // POST UPDATE (Mudar verbo para PUT)
  app.post('/update/:id', function(req, res) {
    // Update an existing note
    var id = req.params.id;
    var content = req.body.updateNote;

    noteController.updateNote(id, content, function(err) {
      res.redirect('/');
    });
  });

  // GET DELETE (Mudar verbo para DELETE)
  app.get('/delete/:id', function(req, res) {
    // Delete an existing note
    var id = req.params.id;

    noteController.deleteNote(id, function(err) {
      res.redirect('/');
    });
  });


  /**
   * REST API STARTS HERE
   **/

  app.get('/notes', function(req, res) {
    noteController.getNotes(function(err, data) {
      if (err) console.log('Error getting notes from API: ', err);
      res.send(data);
    });
  });

  app.post('/notes', function(req, res) {
    if (!req.body.newNote.length) {
      res.send({ error: 'Note cannot be empty.'});
    } else if (req.body.newNote.length > 40) {
      res.send({ error: 'Note cannot be over 40 characters.' });
    } else {
      noteController.createNote(req.body, function(err) {
        if (err) res.send({ error: 'Error creating note.' });
        res.redirect('/notes');
      });
    }
  });

  app.put('/notes/:id', function(req, res) {

  });

  app.delete('/notes/:id', function(req, res) {

  });
};
