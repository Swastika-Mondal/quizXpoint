import React, { useEffect, useState } from "react";
import "./ReadPage.css"; // Assuming you'll provide this CSS file later
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import MarkdownRenderer from 'react-markdown'
import ReackMarkdown from 'react-markdown'

const ReadPage = () => {
  // Toggle sidebar visibility
  const toggleMenu = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.classList.toggle("show"); // Use the 'show' class to toggle the visibility
    }
  };
  const [markdownText, setMarkdownText] = useState('')
  

  const getSubtopic = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/get_subtopic/get_topic_markdown', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          topic: 'DSA'
        })
      })

      if(response.ok){
        const data = await response.json()
        console.log(data.markdown);
        setMarkdownText(data.markdown)
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {

    getSubtopic()
  }, [])

  return (
    <div className="container">
      {/* Hamburger menu */}
      <div className="hamburger" onClick={toggleMenu}>&#9776;</div>
      
      {/* Sidebar with related topics */}
      <div className="sidebar" id="sidebar">
        <div className="close-btn" onClick={toggleMenu}>&#10005;</div>
        <div className="heading">
          <h2>Related Topic</h2>
        </div>
        <div className="topics">
          {Array(12).fill().map((_, idx) => (
            <h3 key={idx}>
              <a href="#">What is array</a>
            </h3>
          ))}
          <h3><a href="#">Problems on array</a></h3>
          <h3><a href="#">Top 50 array coding problems for interview</a></h3>
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        <h1>Array In Data Structure</h1><br />
        <p>Last Updated: 23 Oct, 2024</p>
        <hr />
        <p style={{color: 'white'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur animi ut possimus veniam veritatis
          soluta quos ad sunt voluptates vero iure qui harum nam consequuntur tempore cumque commodi vitae...
          {/* Truncated for brevity */}
        </p>
        <div style={{color: 'white'}}>
          {/* <MarkdownRenderer markdownString={markdownText}/>jo
           */}
           <ReackMarkdown>{markdownText}</ReackMarkdown>
        </div>
        <hr />

        {/* Previous/Next article navigation */}
        <div className="article">
          <div className="prev">
            <a href="#" className="first"><i className="fab fa-angleleft"></i> Previous Article</a>
            <a href="#" className="second">Basic On Array</a>
          </div>
          <div className="line"></div>
          <div className="next">
            <a href="#" className="first">Next Article <i className="fab fa-chevronright"></i></a>
            <a href="#" className="second">Operation On Array</a>
          </div>
        </div>

        {/* Button to start the test */}
        <button className="btn">Ready For Test</button>
      </div>
    </div>
  );
};

export default ReadPage;
