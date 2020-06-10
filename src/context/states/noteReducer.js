import {ADD_NOTE,DELETE_NOTE,CLEAR_CURRENT,SET_CURRENT, NOTE_ERROR, GET_NOTES} from '../types';


export default (state,action)=>{
 switch(action.type){
     case GET_NOTES:
         return{
             ...state,
             notes: action.payload
         }
     case ADD_NOTE:
         return{
             ...state,
             notes: [...state.notes,action.payload]
         }
         case DELETE_NOTE:
             return{
                 ...state,
                 notes: state.notes.filter(note => note._id !== action.payload )
             }
             case SET_CURRENT:
                 return{
                     ...state,
                     current: action.payload
                 }
                 case CLEAR_CURRENT:
                    return{
                        ...state,
                        current: null
                    }
                   case NOTE_ERROR:
                       return{
                           ...state,
                           error: action.payload
                       }
     default:
         return state;
 }
}