import React, { useState } from "react";
import './Login.css';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./store/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      try {
        const response = await fetch(`${BACKEND_HOSTING_URL}/api/auth/login`,{
          method: "POST",
          headers: {
            "Content-Type": 'application/json'
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          })
        })
  
        const res_data = await response.json()
        if(response.ok){
          // console.log(res_data);
          storeTokenInLS(res_data.token)
          toast.success('Login Succeessfull !!')
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
  }
  return (
    <div className="login_page">
      {/* <main>
        <div className="main-content">
          <h1>Login Page</h1>

          <div className="main-box">
            
            <div className="box1">
              <div className="image">
                <img src="/imgs/login.jpg" alt="login" />
              </div>

              <h2>Your Online Testing Partner</h2>

              <h3>Every test is a step closer to your goals—believe in yourself!</h3>
            </div>

            
            <div className="box2">
              <h2 style={{textAlign: 'center', marginBottom: '3rem'}}>LOG IN</h2>
              <form onSubmit={handleSubmit} id="login-form">
                <label htmlFor="mail">Enter email</label>
                <br />
                <input type="email" id="mail" name="email" required value={formData.email} onChange={handleChange}/>
                <br />
                <br />

                <label htmlFor="password">Enter password</label>
                <br />
                <input type="password" id="password" name="password" required value={formData.password} onChange={handleChange}/>
                <br />
                <div className="forgot" style={{textAlign: 'right'}}>
                  <NavLink to="#">Forgot password?</NavLink>
                </div>
                <br />

                <button type="submit" className="btn">
                  Sign in
                </button>
              </form>
              <br />

              
              <br />
              
            </div>
          </div>
        </div>
      </main> */}
      {/* Contact Form */}
      <div className="container">
      <div className="title">
        <h1>Login</h1>
      </div>
      <div className="contact">
        {/* Contact Image */}
        <div className="contact_img" >
          <img src="/imgs/login@4x.png" alt="login" />
          {/* <div style={{transform: 'translateY(-60px)', color: '#61892f'}}>
            <h2>Your Online Testing Partner</h2>
            <h3>Every test is a step closer to your goals—believe in yourself!</h3>
          </div> */}
        </div>
      <div className="c_form">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="inputbox">
              <input
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email} 
                onChange={handleChange}
              />
              <span>Enter Email</span>
            </div>
            <div className="inputbox">
              <input
                type="password" 
                id="password" 
                name="password" 
                required 
                value={formData.password} 
                onChange={handleChange}
              />
              <span>Enter Password</span>
            </div>

            <div className="inputbox" style={{textAlign: 'right'}}>
                  <NavLink to="#" style={{color: 'blue', textDecoration: 'none'}}>Forgot password?</NavLink>
                </div>
            
            <div className="inputbox">
              <input type="submit" value="Login" />
            </div>

            <div className="inputbox">
              <p style={{width: '100%', textAlign: 'right'}}>Are you new?<NavLink to="/registration" style={{color: 'blue', textDecoration: 'none'}}> Create an account</NavLink>
              </p>
            </div>
          </form>

        </div>

        
        </div>
    </div>
    </div>
  );
};

export default Login;
