import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;
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
      name: name,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        'http://localhost:5006/api/user',
        data,
        config
      );
      localStorage.setItem('token', response.data.token);
      console.log(response);
      let decodeduser = decode(response.data.token);
      console.log(decodeduser);
    } catch (e) {
      console.log('error ', e);
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <p>Create Your Account</p>
      <form onSubmit={(e) => onSubmit2(e)}>
        <div>
          <input
            type='text'
            placeholder='Name'
            name='name'
            required
            onChange={(e) => onChange2(e)}
          />
        </div>
        <div>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={(e) => onChange2(e)}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='5'
            onChange={(e) => onChange2(e)}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            minLength='5'
            onChange={(e) => onChange2(e)}
          />
        </div>
        <input type='submit' value='Register' />
      </form>
      <p>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </>
  );
};

export default Register;
