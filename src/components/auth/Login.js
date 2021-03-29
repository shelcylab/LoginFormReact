import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const onChange2 = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit2 = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let data = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        'http://localhost:5006/api/auth',
        data,
        config
      );
      localStorage.setItem('token', response.data.token);
      console.log(response);
    } catch (e) {
      console.log('error ', e);
    }
  };
  return (
    <>
      <h1>Sign In</h1>
      <p>Sign Into Your Account</p>
      <form onSubmit={(e) => onSubmit2(e)}>
        <div>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange2(e)}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            minLength='5'
            onChange={(e) => onChange2(e)}
          />
        </div>

        <input type='submit' value='Login' />
      </form>
      <p>
        <Link to='/register'>Register</Link>
      </p>
    </>
  );
};

export default Login;
