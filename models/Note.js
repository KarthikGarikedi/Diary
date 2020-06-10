const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  date: {
    type: String,
    required:true
  },
  text:{
    type: String,
    required : true
  }
});

module.exports = mongoose.model('note', NoteSchema);
