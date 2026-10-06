import React from 'react';
import './Team.css';
import { NavLink } from 'react-router-dom';

const Team = () => {
    return (
        <div className="our_team_page">
            <div className="container">
            <div className="team_title">
                <h1>Our Team Members</h1>
            </div>
            <div className="our_team">
                <div className="card card1">
                    <div className="card_img">
                        <img src="imgs/ritodeep.jpg" alt="member1" />
                    </div>
                    <div className="member_name">
                        <h5>Ritodeep Mozumder</h5>
                        <p>FastAPI & ML Developer</p>
                        <div className="social-links">
                            <NavLink to="#"><i className="fab fa-facebook"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-linkedin"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-x-twitter"></i></NavLink>
                        </div>
                    </div>
                </div>

                {/* <div className="card card2">
                    <div className="card_img">
                        <img src="imgs/sayak.jpg" alt="member2" />
                    </div>
                    <div className="member_name">
                        <h5>Sayak Roy</h5>
                        <p>Full Stack Developer & PHP Backend Developer</p>
                        <div className="social-links">
                            <NavLink to="#"><i className="fab fa-facebook"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-linkedin"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-x-twitter"></i></NavLink>
                        </div>
                    </div>
                </div>

                <div className="card card1">
                    <div className="card_img">
                        <img src="imgs/soumik.png" alt="member3" />
                    </div>
                    <div className="member_name">
                        <h5>Soumik Pakhira</h5>
                        <p>Software Tester</p>
                        <div className="social-links">
                            <NavLink to="#"><i className="fab fa-facebook"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-linkedin"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-x-twitter"></i></NavLink>
                        </div>
                    </div>
                </div>

                <div className="card card2">
                    <div className="card_img">
                        <img src="imgs/jaif.png" alt="member3" />
                    </div>
                    <div className="member_name">
                        <h5>Md. Jaif</h5>
                        <p>Full Stack Developer</p>
                        <div className="social-links">
                            <NavLink to="#"><i className="fab fa-facebook"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-linkedin"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-x-twitter"></i></NavLink>
                        </div>
                    </div>
                </div> */}

                <div className="card card1">
                    <div className="card_img">
                        <img src="imgs/ahidulla.jpg" alt="member4" />
                    </div>
                    <div className="member_name">
                        <h5>Sk Ahidulla</h5>
                        <p>MERN Stack, FastAPI & ML Developer</p>
                        <div className="social-links">
                            <NavLink to="#"><i className="fab fa-facebook"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-linkedin"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-x-twitter"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Team;
