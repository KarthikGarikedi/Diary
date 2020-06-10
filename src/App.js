import React,{Fragment, useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';
import Navbar from './components/layouts/Navbar';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NoteState from './context/states/NoteState'
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import setAuthToken from './GHeader/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';
import Footer from './components/layouts/Footer'
import Help from './components/pages/Help'
if(localStorage.token){  
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(()=>{
    // initializing materialize js
    M.AutoInit();
  })
  return (
    <div className="page-container">
      <div className="content-wrap">
    <AuthState >
    <NoteState>
    <Router>
    <Fragment>
    <Navbar />
      <div className="main-container">
      <Switch>
        <PrivateRoute exact path='/' component={Home}  />
        <Route exact path='/about' component={About}  />
        <Route exact path='/register' component={Register}  />
        <Route exact path='/Login' component={Login}  />
        <Route exact path='/help' component={Help}  />

      </Switch>
     
      </div>
      
      </Fragment>
      </Router>
      </NoteState> 
         
      </AuthState>
      </div>
      <Footer />
      </div>
  );
}
export default App;
