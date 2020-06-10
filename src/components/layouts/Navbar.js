import React,{useContext, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';


const Navbar = ({title,icon}) => {
  const authContext = useContext(AuthContext);

  const { logout, user, isAuthenticated } = authContext;

      const onLogout =()=>{
        logout();
      }
  const authLinks =(
    <Fragment>
           <ul>      
             <li ><Link to="/help">Help</Link></li>
          <li className='G' >Hello {user && user.name}</li>
          <a  onClick={onLogout} href="#!">
          <button    className="waves-effect waves-light btn-small "  >logout <i className="material-icons" >logout</i></button>
          </a>
          </ul> 
    </Fragment>
  );

    const guestLinks =(
      <Fragment>
        <ul>
        <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">log in</Link></li>
          <li><Link to="/about">About</Link></li>

        </ul>
      </Fragment>
    )

    return (
      <nav style={{marginBottom : '30px'}} className='#42a5f5 blue lighten-1' > 
      <div className="nav-wrapper">
          
          <a href="#!" className="brand-logo" style={{marginLeft : '5px'}}>
            <i className="material-icons ml-2"> {'  '} {icon}
            </i> 
          {title}
          </a>
          
      
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {isAuthenticated ? authLinks : guestLinks}
         
        </ul>
      </div>
    </nav>
    )
}
Navbar.propTypes ={
 title: PropTypes.string.isRequired,
 icon:PropTypes.string
}
Navbar.defaultProps = {
    title: 'Diary 4U',
    icon: 'create'
}
export default Navbar
