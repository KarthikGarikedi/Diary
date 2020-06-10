import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import M from 'materialize-css/dist/js/materialize.min.js';


const Login = props => {
  const authContext = useContext(AuthContext);

  const { login, error, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      M.toast({ html: 'Invalid Credentials,please register' });
      props.history.push('/register');

    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
            M.toast({ html: 'fill all  the forms' });

    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    <div className='form-container'>
      <div className='container'>
        <div className="container">
        <div className="container">

      <h1>
        Account <span className='cyan-text text darken-2'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
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
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
