import React,{useReducer} from 'react';
import axios from 'axios';
import NoteContext from './noteContext';
import noteReducer from './noteReducer';
import {ADD_NOTE,DELETE_NOTE,CLEAR_CURRENT,SET_CURRENT, NOTE_ERROR, GET_NOTES} from '../types';



const NoteState = props =>{
    const initialState ={
        notes:[],
        current:null,
        error:null
    }

    const [state,dispatch] = useReducer(noteReducer,initialState);

    //getting all notes
    const getNotes = async () => {
      try {
        const res = await axios.get('/api/notes');
  
        dispatch({
          type: GET_NOTES,
          payload: res.data
        });
      } catch (err) {
        dispatch({
          type: NOTE_ERROR,
          payload: err.response.msg
        });
      }
    };
    // add new note
        const addNotes =  async note =>{
            const config = {
                headers: {
                  'Content-Type': 'application/json'
                }
              };
          
              try {
                const res = await axios.post('/api/notes', note, config);
          
                dispatch({
                  type: ADD_NOTE,
                  payload: res.data
                });
              } catch (err) {
                dispatch({
                  type: NOTE_ERROR,
                  payload: err.response.msg
                });
              }
            };
        
    //deleting new note
              
          const deleteNotes = async _id => {
            try {
              await axios.delete(`/api/notes/${_id}`)
              
              dispatch({type:DELETE_NOTE,payload: _id})

            } catch (err) {
              dispatch({
                type: NOTE_ERROR,
                payload: err.response.msg
              });
            }
          };
        
    //updating note
 
    //set current note
    const setCurrent = note =>{
            
        dispatch({type:SET_CURRENT,payload: note})
    }
    //clear current note
    const clearCurrent = () =>{
            
        dispatch({type:CLEAR_CURRENT})
    }
    return (
        <NoteContext.Provider
            value={{
                notes : state.notes,
                error:   state.error,
                current: state.current,
                note: state.notes.map(note => note),
                _id: state._id,
                addNotes,
                deleteNotes,
                setCurrent,clearCurrent,getNotes

            }
                
            }
            >
            {props.children}
        </NoteContext.Provider>
    )
        }
export default NoteState;