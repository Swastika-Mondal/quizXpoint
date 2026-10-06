import React, { useState, useEffect } from 'react';
import './EndPage.css'; // Ensure this path is correct
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './store/auth';
import { toast } from 'react-toastify';

const EndPage = () => {
  const [percentage, setPercentage] = useState(70);
  const [message, setMessage] = useState('');
  const [expandedBoxes, setExpandedBoxes] = useState([false, false, false, false, false]);
  const location = useLocation()
  const {apiQuestions} = location.state || []
  const {ansByUser} = location.state || []
  const {timeTaken} = location.state || {}
  const {mcqtopic} = location.state || ''
  const [corrAns, setCorrAnse] = useState(0)
  const [unattendentQues, setUnattendentQues] = useState(0)
  const [originalQuesAns, setOriginalQuesAns] = useState([])
  const [totalTime, setTotalTime] = useState({
    formatedSeconds: 0,
    formatedMinutes: 0
  })
  const navigate = useNavigate()
  const {user, PYTHON_BACKEND_URL} = useAuth()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // console.log('APi Questions:', apiQuestions);
    // console.log('Answer By User', ansByUser);
    // console.log(timeTaken);
    // if(apiQuestions){
    // }else{
    //   setOriginalQuesAns([])
    // }
    try{
      setOriginalQuesAns(apiQuestions)
      setTotalTime(timeTaken)
      

      const original_answers = []
      const answers_by_user = []
      let correct_answer = 0
      let unaatend = 0
      for (const ques of apiQuestions) {
        original_answers.push(ques.options.indexOf(ques.answer))
      }
      for (const ques of ansByUser) {
        if(ques.selectedByUser === undefined){
          answers_by_user.push(-1)
        }else{
          answers_by_user.push(ques.selectedByUser - 1)
        }
      }

      for (let index = 0; index < original_answers.length; index++) {
        if(answers_by_user[index] === -1){
          unaatend++
        }
        if(original_answers[index] === answers_by_user[index]){
          correct_answer++
        }
      }
      setCorrAnse(correct_answer)
      setUnattendentQues(unaatend)
      setPercentage((correct_answer * 100)/original_answers.length)
  }catch(error){
    navigate('/start')
  }
    // console.log(original_answers);
    // console.log(answers_by_user);
    
    
  }, [])

  useEffect(() => {
    progress(percentage);
    if (percentage >= 90) {
      setMessage('Outstanding Performance!');
    } else if (percentage >= 80) {
      setMessage('Excellent Performance!');
    } else if (percentage >= 50 && percentage <= 70) {
      setMessage('Great Job!');
    } else if (percentage >= 20 && percentage <= 50) {
      setMessage('Good Attempt!');
    } else {
      setMessage('Try Again! Better luck next time.');
    }
  }, [percentage]);

  const progress = (percentage) => {
    const progressbar = document.querySelector('.progressbar');
    const progressLevel = document.querySelector('#progressLevel');

    if (progressbar) {
      progressbar.style.width = `${percentage}%`;
      progressLevel.textContent = `${percentage}%`;
    }
  };

  const toggleBox = (index) => {
    const newExpandedBoxes = [...expandedBoxes];
    newExpandedBoxes[index] = !newExpandedBoxes[index];
    setExpandedBoxes(newExpandedBoxes);
  };

//   useEffect(() => {
//     const handleBackButton = () => {
//         navigate('/')
//     }

//     window.history.pushState(null, "", window.location.href)
//     window.addEventListener("popstate", handleBackButton)

//     return () => {
//         window.removeEventListener("popstate", handleBackButton)
//     }
// }, [navigate])

const viewResult = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${PYTHON_BACKEND_URL}/api/get_certificate/certificate`, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          name: user.username,
          subject: mcqtopic,
          score: percentage
        })
      })

      if(!response.ok){
        throw new Error("Network response was not okay !!")
      }

      const blob = await response.blob()
      
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')

      a.href = url

      a.download = `${user.username}_Certificate.pdf`

      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)

      toast.success("Your Certificate is Downloading !!")
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error("Error downloading pdf file", error);
    }
}

  return (
    <div  className={loading? 'blur_background endpage' : 'endpage'}>
      <img src="imgs/loading.gif" alt="loading" className={loading?'loading_gif ': 'loading_gif hide_loading_gif'}/>
      <div className="main-container">
      <div className="heading">
        <h1>Test Result</h1>
      </div>

      <div className="image">
        <img src="/imgs/trophy.jpg" alt="trophy" />
      </div>

      <div className="score-details">
        <div className="score">
          <h2>Your Score: {percentage}/100</h2>
        </div>

        <div className="progressbar-container">
          <div className="progressbar">
            <span id="progressLevel">0%</span>
          </div>
        </div>

        <div className="msg">
          <p id="para">{message}</p>
          <p id="time">Time taken: {totalTime.formatedMinutes} Minutes {totalTime.formatedSeconds} Seconds</p>
          <p id="total-qs">No. of Questions: {originalQuesAns.length}</p>
          <p id="attended-qs">No. of Attended Questions &#x2714;: {originalQuesAns.length - unattendentQues}</p>
          <p id="correct">No. of Correct Answers &#x2705;: {corrAns}</p>
          <p id="wrong">No. of Wrong Answers &#x2716;: {originalQuesAns.length - corrAns}</p>
        </div>
      </div>

      <div className="all-ans">
        {originalQuesAns.map((question, index) => (
          <div className="box" key={index}>
            <div className="qs" onClick={() => toggleBox(index)}>
              <span>{question.question}</span>
              <span className={`arrow ${expandedBoxes[index] ? 'rotate' : ''}`}>&#x25BC;</span>
            </div>
            {expandedBoxes[index] && (
              <div className="ans" style={{textAlign:'left', padding: '1rem 2rem'}}>
                <p>Answer: {question.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="button">
        <button id="view-res" className="btn" onClick={viewResult}>Get Certificate</button>
        <button id="retake-test" className="btn" onClick={() => navigate('/start')}>Retake Test</button>
      </div>
    </div>
    </div>
  );
};

export default EndPage;
