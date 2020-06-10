import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import M from 'materialize-css/dist/js/materialize.min.js';


const Register = props => {
  const authContext = useContext(AuthContext);

  const { register, error,  isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      M.toast({ html: 'user already  exists, Please Login' });
      props.history.push('/login');
  
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      M.toast({ html: 'Please fill all the fields' });
    } else if (password !== password2) {
      M.toast({ html: 'Passwords did not match' });
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  return (
    <div className='form-container'>
      <div className="container">
        <div className="container">
      <h3>
        Account <span className='yellow-text text-darken-2' >Registration</span>
      </h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            id='password2'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
      </div>
      </div>
    </div>
  );
};

export default Register;
