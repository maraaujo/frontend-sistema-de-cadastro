import React from "react";
import { Link } from 'react-router-dom';
import Login from "../login/Login";
import { adminApi } from "../../api/admin.api";
import useHistory from "use-history";


function Singup(){
  const [formData, setFormData] = useState({ //pegar oestado inicial
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''

  });
  const [error, setError] = useState(null);
  const history = useHistory(); 

  const handleChange = (e) => {
    const {id, value} = e.target; 
    setFormData ({...formData, [id]: value});
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(formData.passaword !== formData.confirmPassword){
      setError('Wrong password');
      return;
    }

    try{
      const newUser ={ 
        firstName : formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        passaword: formData.passaword
      }; 
      await adminApi.createUsuario(newUser);
      history.push('/Login');
    }catch(err){
      setError('Error creating account. Please try again.')
    }
  };
  return(
    <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-primary' >
      <div className='form_container border-danger p-5 rounded bg-white'>
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">
              Sing Up
          </h3>
          {error && <div className="alert alert-danger">{error}</div>}
          <div htmlFor='mb-2'>
            <label htmlFor='firstName'> First Name</label>
            <input
            type="text"
            placeholder='Enter your first name'
            className='form-control'
            id='firstName'
            value={formData.firstName}
            onChange={handleChange}
            />
          </div>
          <div className='mb-2'>
          <label htmlFor='lastName'>Last Name</label>
            <input
              type="text"
              placeholder='Enter your last name'
              className='form-control'
              id='lastName'
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input
              type="email"
              placeholder='Enter your Email'
              className='form-control'
              id='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              placeholder='Enter your Password'
              className='form-control'
              id='password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='confirmPassword'>Confirm your Password</label>
            <input
              type="password"
              placeholder='Confirm your Password'
              className='form-control'
              id='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className='d-grid'>
            <button type="submit" className='btn btn-primary'>Sign up</button>
          </div>
          <p className='text-end mt-2'>
            Already Registered?
            <Link to="/Login" className='ms-2'>Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;