import React,{useContext} from 'react';
import NoteContext from '../../context/states/noteContext';


const NoteForm1 = ({ note  }) => {
    const noteContext = useContext(NoteContext);
    
    const { deleteNotes,clearCurrent} = noteContext;
    const { _id} = note;
    const onDelete = ()=>{
      deleteNotes(_id);
      clearCurrent();
    }
    
    return (
        <div>
            <div className="card blue-grey darken-1">
        <div className="card-content white-text">
    <span className="card-title"> <strong>Date:</strong> {note.date}
        </span>
        <p> <strong color='dark'>Note:</strong>  {note.text}</p>
           
        <button    className="waves-effect waves-light btn-small right" onClick={onDelete} >Delete <i className="material-icons" >delete</i></button>
        </div>
        </div>
        </div>
    )
}

export default NoteForm1
