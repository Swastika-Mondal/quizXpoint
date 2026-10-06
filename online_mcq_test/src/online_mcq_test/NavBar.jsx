import React from 'react'
import './NavBar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from './store/auth'

export default function NavBar() {
  const navigate = useNavigate()
  const {isLoggedIn} = useAuth()
  return (
    <>
    <nav>
          <div className="navbar">
            <div className="logo" style={{cursor: 'pointer'}}>
              {/* The image src will need the correct path */}
              <img src="/imgs/logo.png" alt="logo" onClick={() => navigate('/')}/>
            </div>

            <div className="links">
              <div className="home">
                <NavLink to="/" >Home</NavLink>
              </div>

              <div className="about">
                <NavLink to="/about" >About Us</NavLink>
              </div>

              <div className="contact">
                <NavLink to="/contact">Contact</NavLink>
              </div>

              <div className="faq">
                <NavLink to="/faq">FAQ</NavLink>
              </div>

              {isLoggedIn? 
                <div className="logout">
                  <NavLink to="/logout">Logout</NavLink>
                </div>
               :
               <>
                <div className="login">
                  <NavLink to="/login">Log in</NavLink>
                </div>

                <div className="sign-up">
                  <NavLink to="/registration">Sign up</NavLink>
                </div>
              </>}
            </div>
          </div>
        </nav>
    </>
  )
}
