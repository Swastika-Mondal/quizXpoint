import React from 'react';
import './AboutUs.css';
// import aboutImage from 'imgs/about_us.jpg'; // Make sure this image is in the correct directory
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="aboutpage">
            <div className="container">
            <div className="about_us">
                <div className="about_image">
                    <img src='imgs/about_us.jpg' alt="About us" />
                </div>
                <div className="about_text">
                    <h1>About Us</h1>
                    <p>
                        At <strong>quizXpoint</strong>, we are a passionate team of developers and educators dedicated to transforming the way assessments are conducted. Our online examination platform is designed to provide a seamless and efficient experience for students and institutions alike. With a focus on security, reliability, and user-friendly interfaces, we leverage cutting-edge technology to create a robust assessment environment. Our mission is to empower educators with innovative tools that enhance learning and evaluation, making exams accessible and fair for everyone. Join us in redefining the future of education, one exam at a time!
                    </p>
                    <NavLink to="/team" className="btn">Our Team</NavLink>
                    <div className="social-icons">
                        <NavLink to="#"><i className="fab fa-facebook"></i></NavLink>
                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                        <NavLink to="#"><i className="fab fa-linkedin"></i></NavLink>
                        <NavLink to="#"><i className="fab fa-x-twitter"></i></NavLink>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;
