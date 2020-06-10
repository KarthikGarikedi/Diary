import React, { useContext, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import NoteContext from '../../context/states/noteContext';


const AddLogModal = () => {
  const noteContext = useContext(NoteContext);

  const {addNotes} = noteContext;
  const [date, setDate] = useState('');
  const [text, setText] = useState('');

 

  const onSubmit = () => {
    if (date === '' || text === '') {
      M.toast({ html: 'Please enter a Date and Note' });
    } else {
      const newNote = {
        date,
        text
      };

      addNotes(newNote);

      M.toast({ html: `Note added.` });

      // Clear Fields
      setDate('');
      setText('');
    }
  };

  return (
    <div id='add-note-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='date'
              value={date}
              onChange={e => setDate(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Date
            </label>
          </div>
        </div>

      </div>
      <div className='modal-content'>
        <div className='row'>
          <div className='input-field'>
          <textarea id="textarea1" className="materialize-textarea"  type='text'
              name='text'
              value={text}
              onChange={e => setText(e.target.value)}></textarea>

            <label htmlFor='message' className='active'>
              Note
            </label>
          </div>
        </div>

      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Add
        </a>
      </div>
    </div>
  );
};


const modalStyle = {
  width: '75%',
  height: '75%'
};

export default AddLogModal;
