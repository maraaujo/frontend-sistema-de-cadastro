import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form_container border-danger p-5 rounded bg-white'>
        <form>
          <h3 className='text-center'>Sign In</h3>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input type="email" placeholder='Enter your Email' className='form-control' />
          </div>
          <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input type="password" placeholder='Enter your Password' className='form-control' />
          </div>
          <div className='mb-2'>
            <input type="checkbox" className='custom-control custom-checkbox' id="check" />
            <label htmlFor='check' className='custom-input-label'>
              Remember me
            </label>
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary'>Sign in</button>
          </div>
          <p className='text-end mt-2'>
            Forgot <Link to="/forgot-password">Password?</Link>
            <Link to="/Signup" className='ms-2'>Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
