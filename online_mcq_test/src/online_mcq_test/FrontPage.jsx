import React from 'react';
import './FrontPage.css'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import { useAuth } from './store/auth';

const FrontPage = () => {
  const navigate = useNavigate()
  const {isLoggedIn} = useAuth()

  const getStarted = () => {
    if(isLoggedIn){
      navigate('/start')
    }else{
      navigate('/login')
    }
  }

  return (
    <div style={{height: '100vh', display: 'flex', alignItems: 'center', flexWrap: 'wrap'}} className='frontpage'>
      <main className="main_box">
        <div className="headings">
          <div>
          <h1>Your Online <br /> Testing Partner</h1>

          <h2 style={{marginTop: "0.4rem", color: '#c0c6c7'}}>Test Your Knowledge Anytime, Anywhere!</h2>

          <h3 style={{marginTop: "0.4rem", color: '#569301'}}>Take tests, evaluate yourself, and track your progress with ease.</h3><br />
          </div>

          <div style={{marginTop: "1rem"}}>
            <button className="btn1" onClick={getStarted}>Get Started</button>
            <button className="btn2">Demo Test</button>
          </div>
        </div>
        <div className="logo_bar">
          {/* The image src will need the correct path */}
          <img src="imgs/1.png" alt="logo bar" />
        </div>
      </main>
    </div>
  );
};

export default FrontPage;