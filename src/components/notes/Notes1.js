import React,{Fragment,useEffect,useContext}from 'react';
import NoteItem1 from './NoteItem1';

import NoteContext from '../../context/states/noteContext';


const Notes1 = () => {
    const noteContext = useContext(NoteContext);

    const {notes,getNotes} = noteContext;
    useEffect(()=>{
        getNotes();
        //eslint-disable-next-line
    },[])
    return (
        <Fragment>
            { notes.map(note=>(
            <NoteItem1 note={note} key={note._id} />
            )
                )  }
            
        </Fragment>
    )
}

export default Notes1
