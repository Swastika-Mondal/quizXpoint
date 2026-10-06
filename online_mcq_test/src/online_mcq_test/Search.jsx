import React, { useState } from 'react';
import './Search.css'; 
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate()

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const takeTest = (e) => {
    e.preventDefault();
    // console.log(`Searching for: ${searchTerm}`);
    // Implement search or form action here
    if(searchTerm){
      navigate('/exam', {state: {mcqtopic: searchTerm}})
    }
    else{
      toast.error('Please Fill The Input !!')
    }
  };
  const readTakeTest = (e) => {
    e.preventDefault();
    // console.log(`Searching for: ${searchTerm}`);
    // Implement search or form action here
    if(searchTerm){

    }
    else{
      toast.error('Please Fill The Input !!')
    }
  };

  return (
    <div className="search_topic_page">
      <div className="container">
        <div className="title">
          <h1>SEARCH YOUR TOPIC</h1>
        </div>

        <div>
          <div className="search_box">
            <input type="text" placeholder="Search your topic..." aria-label="Search" 
                name="searchbar"
                id="searchbar"
                value={searchTerm}
                onChange={handleSearchChange}/>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="btns">
            <button onClick={takeTest}>Take Test</button>
            <button onClick={readTakeTest}>Read About It</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
