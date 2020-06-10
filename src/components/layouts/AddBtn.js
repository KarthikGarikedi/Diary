import React from 'react';

const AddBtn = () => {
  
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-note-modal'
        className='btn-floating btn-large blue darken-2 modal-trigger'
      >
        <div className="modal-content">
        <i className='large material-icons' placeholder='add new'>add</i>
        </div>
      </a>
    
    </div>
  );
};

export default AddBtn;
