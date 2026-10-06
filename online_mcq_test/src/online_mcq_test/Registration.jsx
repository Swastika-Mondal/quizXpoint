import React, { useState } from 'react';
import './Registration.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './store/auth';
import { toast } from 'react-toastify';

const Registration = () => {
  // State to handle form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
  });
  const {BACKEND_HOSTING_URL, storeTokenInLS} = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form submit logic can go here
    // console.log('Form data submitted:', formData);
    if(formData.confirmPassword === formData.password){
      try {
        const response = await fetch(`${BACKEND_HOSTING_URL}/api/auth/signup`,{
          method: "POST",
          headers: {
            "Content-Type": 'application/json'
          },
          body: JSON.stringify({
            username: formData.name,
            email: formData.email,
            password: formData.password,
            phone: formData.contact
          })
        })
  
        const res_data = await response.json()
        if(response.ok){
          // console.log(res_data);
          storeTokenInLS(res_data.token)
          toast.success('Registration Succeessfull !!')
          navigate('/')
        }else{
          // console.log(res_data);
          Object.values(res_data).map((err) => {
            return toast.error(err)
          })
      }
      } catch (error) {
        console.log(error);
      }
    }else{
      toast.error('Password and Confirm Password must be same !!')
    }
  };

  return (
    <div className='registration_page'>
        {/* <div className="main-content" style={{height: '100vh', display:'flex', flexDirection:'column',
          justifyContent: 'center', alignItems: 'center', gap: '1rem',
        }}>
          <h1>Registration Page</h1>

          <div className="main-box">
            <div className="box1">
              <div className="image">
                <img src="/imgs/onlinetest.jpg" alt="Registration" />
              </div>

              <h2>Your Online Testing Partner</h2>
              <h3>Create your account and start your journey from now...</h3>
            </div>

            <div className="box2 form-container">
              <h2>Create Account</h2>
              <form onSubmit={handleSubmit} id="registration-form">
                <div className="form-field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    id='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Put password again"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact">Contact Number</label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    placeholder="1234567890"
                    pattern="[0-9]{10}"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field" id="login">
                  <NavLink to="/login" style={{color: 'blue', textDecoration: 'none'}}>Are you already registered?</NavLink>
                </div>

                <div className="form-field">
                  <input type="submit" value="Register" />
                </div>
              </form>
            </div>
          </div>
        </div> */}

<div className="container">
      <div className="title">
        <h1>Signup</h1>
      </div>
      <div className="contact">
        
      <div className="c_form">
          <form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <div className="inputbox">
              <input
                type="text"
                name="name"
                id='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
              <span>Enter Name</span>
            </div>
            <div className="inputbox">
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
              <span>Enter Email</span>
            </div>
            <div className="inputbox">
            <input
                    type="tel"
                    id="contact"
                    name="contact"
                    pattern="[0-9]{10}"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
              <span>Enter Phone</span>
            </div>
            <div className="inputbox">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span>Enter Password</span>
            </div>
            <div className="inputbox">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
              <span>Confirm Password</span>
            </div>

            <div className="inputbox" style={{textAlign: 'right', color: '#c5c6c7'}}>
              Are you already<NavLink to="/login" style={{color: 'blue', textDecoration: 'none'}}> registered?</NavLink>
            </div>
            
            <div className="inputbox">
              <input type="submit" value="Register" />
            </div>

          </form>

        </div>
        {/* Contact Image */}
        <div className="contact_img" >
          <img src="/imgs/signup.png" alt="Registration" />
          {/* <div style={{transform: 'translateY(20px)'}}>
          <h2>Your Online Testing Partner</h2>
          <h3>Create your account and start your journey from now...</h3>
          </div> */}
        </div>
        </div>
    </div>
    </div>
  );
};

export default Registration;