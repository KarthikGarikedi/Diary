import React,{useContext,useEffect} from 'react';
import Notes1 from '../../components/notes/Notes1';
import AuthContext from '../../context/auth/authContext';
import Calender from 'react-calendar'
import AddBtn from '../layouts/AddBtn'
import AddLogModal from '../../components/notes/AddLogModal';


const Home = () => {

  const authContext = useContext(AuthContext);

  useEffect(()=>{
    authContext.loadUser();
    //eslint-disable-next-line
  },[])
    return (
        
    <div className="row">
    <div className="col s12">Your Recent Write-Ups:</div>
    <div className="col s6">
        <Notes1  />
        <div className=" cyan-text text darken-2 left"><h6>Refresh and</h6>
        <h6>click  on         <i className='small material-icons' placeholder='add new'>add_circle_outline</i>
        &nbsp; to add a new note</h6></div>
        <AddBtn />
        <AddLogModal />
    </div>
    <div className="col s6">
    <div className="row">
    <div className="container">
    <div className="col 2">
      <div className="card">
        <div className="card-image">
          
         <Calender />
         </div>
        </div>
        </div>
        </div>
        </div>

    </div>
   
  
  </div>
    )
}

export default Home
