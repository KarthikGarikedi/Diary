const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const User = require('../models/User');
const Note = require('../models/Note');


// purpose :
// getting users notes at api/notes
// get req
router.get('/', auth, async (req, res) => {
  try {
    const notes = await Note.find({user: req.user.id}).sort({
      date: -1,
    });
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// purpose :
// to add a new note at api/notes based on id
// post req

router.post(
  '/',
  [
    auth,
   
  ],
  async (req, res) => {
   
    const {date,text} = req.body;

    try {
      const newNote = new Note({
       date,text,
        user: req.user.id,
      });

      const note = await newNote.save();

      res.json(note);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);

// purpose :
// to update notes at api/auth
// put req

router.put('/:id', auth, async (req, res) => {
  const {date,text} = req.body;

  // Build note object
  const noteFields = {};
  if (date) noteFields.date = date;
  if (text) noteFields.text = text;


  try {
    let note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({msg: 'note not found'});

    // Make sure user owns note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      {$set: noteFields},
      {new: true},
    );

    res.json(note);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});


// purpose :
// to delete notes at api/auth based on id 
// delete  req
router.delete('/:id', auth, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({msg: 'note not found'});

    // Make sure user owns contact
    

    await Note.findByIdAndRemove(req.params.id);

    res.json({msg: 'Note removed'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error  at delete');
  }
});

module.exports = router;
