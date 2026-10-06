import React, { useEffect, useState } from 'react';
import './Contact.css'; // Assuming you'll provide the CSS later
import { useAuth } from './store/auth';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

const Contact = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const {user, BACKEND_HOSTING_URL} = useAuth()
  // const navigate = useNavigate()

  useEffect(() => {
    setFormData({
      name: user.username,
      email: user.email,
      message: ''
    })
  }, [])

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const response = await fetch(`${BACKEND_HOSTING_URL}/api/form/contact`,{
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          username: formData.name,
          email: formData.email,
          message: formData.message,
        })
      })

      const res_data = await response.json()
      if(response.ok){
        // console.log(res_data);
        toast.success('Message Send Succeessfull !!')
        setFormData({
          name: user.username,
          email: user.email,
          message: ''
        })
      }else{
        // console.log(res_data);
        Object.values(res_data).map((err) => {
          return toast.error(err)
        })
    }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contactpage">
      <div className="container">
      <div className="title">
        <h1>Contact Us</h1>
      </div>

      <div className="contact">
        {/* Contact Form */}
        <div className="c_form">
          <form onSubmit={handleSubmit}>
            <h2>Send Message</h2>
            <div className="inputbox">
              <input
                type="text"
                name="name"
                required="required"
                value={formData.name}
                onChange={handleInputChange}
              />
              <span>Full Name</span>
            </div>
            <div className="inputbox">
              <input
                type="email"
                name="email"
                required="required"
                value={formData.email}
                onChange={handleInputChange}
              />
              <span>Enter Email</span>
            </div>
            <div className="inputbox">
              <textarea
                name="message"
                required="required"
                value={formData.message}
                onChange={handleInputChange}
              />
              <span>Write Message...</span>
            </div>
            <div className="inputbox">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>

        {/* Contact Image */}
        <div className="contact_img">
          <img src="imgs/contact_us.png" alt="Contact Us" />
        </div>
      </div>

      {/* Social Media and Contact Info */}
      {/* <div className="sub_title">
        <h2>Get in Touch</h2>
      </div> */}

      {/* <div className="sc_info">
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>abcd, xyz, India</span>
          </div>
          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <span>+1 (234) 567-890</span>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <span>abcd@gmail.com</span>
          </div>
        </div> */}
        
        {/* <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
        </div> */}
      {/* </div> */}
    </div>
    </div>
  );
};

export default Contact;
