import React, { useState, useEffect } from 'react';
import './Exam.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './store/auth';

class Question {
    constructor(question, option1, option2, option3, option4) {
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.selectedByUser = undefined;
        this.visited = true;
    }
}

const Exam = () => {
    // const [currentQuestion, setCurrentQuestion] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [mcqQuestions, setMcqQuestions] = useState([])
    const [questions, setQuestions] = useState([]);
    const [questionNo, setQuestionNo] = useState(0);
    const [visited, setVisited] = useState(0);
    const [notVisited, setNotVisited] = useState(0); // Assuming there are 25 questions
    const [topic_name, setTopic_name] = useState('')
    const location = useLocation()
    const {mcqtopic} = location.state || {}
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [questionGenByAPI, setQuestionGenByAPI] = useState([])
    const {user, PYTHON_BACKEND_URL} = useAuth()

    
    const getAllQuestions = async () => {
        try {
            // console.log(mcqtopic);
            setLoading(true)
            await setTopic_name(mcqtopic)
            const response = await fetch(`${PYTHON_BACKEND_URL}/api/get_questions/get_mcq`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({
                    topic: mcqtopic
                })
            })

            const data = await response.json()
            if (response.ok) {
                // console.log(data);
                setQuestionGenByAPI(data)
                const api_questions = []
                data.map((ques) => {
                    const q = []
                    q.push(ques.question)
                    for (let index = 0; index < ques.options.length; index++) {
                        q.push(ques.options[index])
                    }
                    api_questions.push(q)
                })
                setMcqQuestions(api_questions)
            }else{
                navigate('/start')
            }
            setLoading(false)
            setTotalTime(0)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllQuestions()
    },[])

    useEffect(() => {
        const initialQuestions = mcqQuestions.map(q => new Question(q[0], q[1], q[2], q[3], q[4]));
        setQuestions(initialQuestions);
        setNotVisited(mcqQuestions.length-1)
    }, [mcqQuestions]);

    useEffect(() => {
        if(totalTime <0){
            console.log('Countdown Has Ended');
            return
        }

        const timer = setTimeout(() => {
            setTotalTime(totalTime + 1)
        }, 1000);

        return () => clearTimeout(timer)
    }, [totalTime]);

    const formatedMinutes = Math.floor(totalTime/60).toString().padStart(2, '0')
    const formatedSeconds = (totalTime%60).toString().padStart(2, '0')
    
    const handleNext = () => {
        let updatedQuestions = [...questions];

        // console.log(questions);
        if(questionNo===mcqQuestions.length-1){
            navigate('/result', {state: {apiQuestions: questionGenByAPI, ansByUser: questions, timeTaken: {formatedMinutes, formatedSeconds}, mcqtopic: mcqtopic}})
            return
        }
        
        // Deselect all options
        document.querySelectorAll('input[name="mcqoption"]').forEach(option => {
            option.checked = false;
        });

        // const box = document.querySelector(`ques_no${questionNo}`)
        // box.style.backgrounColor = 'green'

        // Update 'Finish' or 'Next' button text
        const nextFinishBtn = document.getElementById("nextBtn");
        if (questionNo === mcqQuestions.length-2) {
            nextFinishBtn.innerText = 'Finish';
        } else {
            nextFinishBtn.innerText = 'Next';
        }

        // Handle visited and not visited counters
        if (questionNo < mcqQuestions.length-1) {
            if (visited !== mcqQuestions.length) {
                if (updatedQuestions[questionNo].visited) {
                    setVisited(prev => prev + 1);
                    updatedQuestions[questionNo].visited = false;
                }
            }

            if (notVisited !== 0) {
                setNotVisited(prev => prev - 1);
            }

            setQuestionNo(prev => prev + 1);
            setQuestions(updatedQuestions);
        }
    };


    
    const handlePrevious = () => {
        let updatedQuestions = [...questions];

        if(questionNo===0){
            return;
        }

        // Deselect all options
        document.querySelectorAll('input[name="mcqoption"]').forEach(option => {
            option.checked = false;
        });

        // Update 'Finish' or 'Next' button text
        const nextFinishBtn = document.getElementById("nextBtn");
        if (questionNo === mcqQuestions.length-2) {
            nextFinishBtn.innerText = 'Finish';
        } else {
            nextFinishBtn.innerText = 'Next';
        }

        if (questionNo > 0) {
            setQuestionNo(prev => prev - 1);
            setQuestions(updatedQuestions);
        }
    };

    const handleOptionChange = (e) => {
        const selectedOption = parseInt(e.target.id.split("_")[1]);
        let updatedQuestions = [...questions];
        updatedQuestions[questionNo].selectedByUser = selectedOption;
        setQuestions(updatedQuestions);
    };

    // useEffect(() => {
    //     const handleBackButton = () => {
    //         navigate('/')
    //     }

    //     window.history.pushState(null, "", window.location.href)
    //     window.addEventListener("popstate", handleBackButton)

    //     return () => {
    //         window.removeEventListener("popstate", handleBackButton)
    //     }
    // }, [navigate])


    return (
        <div className='exampage'>
            <img src="imgs/loading.gif" alt="loading" className={loading?'loading_gif ': 'loading_gif hide_loading_gif'}/>
            <div className="container">
                <div className="left_container" style={{backgroundColor: '#474b4f'}}>
                    <div className="left_box left_box1">
                        <div className="image_box">
                            <img src="imgs/bg.png" alt="" />
                        </div>
                    </div>

                    <div className="left_box left_box2" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <h4>{user.username}</h4>
                        <h4>{topic_name}</h4>
                    </div>

                    <div className="left_box left_box3">
                        <div className="question_box">
                            {Array.from({ length: mcqQuestions.length }, (_, index) => (
                                <div key={index} className={ questionNo === index ? `ques_no ques_no${index + 1} change_background`: `ques_no ques_no${index + 1} `}>
                                    {index + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="left_box left_box4"></div>
                </div>

                <div className="right_container">
                    <div className="right_box right_box1">
                        <div className="right_head right_head1">
                            <p style={{color: '#9f9f9f'}}>Visited</p>
                            <div className="inner_head inner_head1">
                                <p><span id="visited_question">{visited+1}</span>/{mcqQuestions.length}</p>
                            </div>
                        </div>
                        <div className="right_head right_head2">
                            <p style={{color: '#9f9f9f'}}>Not Visited</p>
                            <div className="inner_head inner_head2">
                                <p id="not_visited_question" style={{color: '#86c232'}}>{notVisited}</p>
                            </div>
                        </div>
                        <div className="right_head right_head4">
                            <p style={{color: '#9f9f9f'}}>Time: </p>
                            <div className="inner_head inner_head4">
                                <p id="time_left">{`${formatedMinutes} Minutes ${formatedSeconds} Seconds`}</p>
                            </div>
                        </div>
                    </div>

                    <div className="right_box right_box2">
                        <div className="right_inner">
                            <div className="right_middle right_middle1">
                                <p>Screen. <span id="current_question_no">{questionNo + 1}</span></p>
                                <div className="reload_icon">
                                    <i className="fa-solid fa-rotate" ></i>
                                </div>
                            </div>
                            <div className="right_middle right_middle2">
                                <div className="question" id="current_question">
                                    <p>{questions[questionNo]?.question}</p>
                                </div>
                                <div className="options">
                                    <div className="ans">ans.</div>
                                    <div className="option">
                                        <label className="option_1">
                                            <div>
                                                <input 
                                                    type="radio" 
                                                    name="mcqoption" 
                                                    id="option_1" 
                                                    checked={questions[questionNo]?.selectedByUser === 1} 
                                                    onChange={handleOptionChange}
                                                />
                                                <span></span>
                                                <i></i>
                                            </div>
                                            <p className="que_option">{questions[questionNo]?.option1}</p>
                                        </label>
                                        <label className="option_2">
                                            <div>
                                                <input 
                                                    type="radio" 
                                                    name="mcqoption" 
                                                    id="option_2" 
                                                    checked={questions[questionNo]?.selectedByUser === 2} 
                                                    onChange={handleOptionChange}
                                                />
                                                <span></span>
                                                <i></i>
                                            </div>
                                            <p className="que_option">{questions[questionNo]?.option2}</p>
                                        </label>
                                        <label className="option_3">
                                            <div>
                                                <input 
                                                    type="radio" 
                                                    name="mcqoption" 
                                                    id="option_3" 
                                                    checked={questions[questionNo]?.selectedByUser === 3} 
                                                    onChange={handleOptionChange}
                                                />
                                                <span></span>
                                                <i></i>
                                            </div>
                                            <p className="que_option">{questions[questionNo]?.option3}</p>
                                        </label>
                                        <label className="option_4">
                                            <div>
                                                <input 
                                                    type="radio" 
                                                    name="mcqoption" 
                                                    id="option_4" 
                                                    checked={questions[questionNo]?.selectedByUser === 4} 
                                                    onChange={handleOptionChange}
                                                />
                                                <span></span>
                                                <i></i>
                                            </div>
                                            <p className="que_option">{questions[questionNo]?.option4}</p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="right_middle right_middle3">
                                <div className="right_btns right_btns1">
                                    <button type="button" id="previous_btn" onClick={handlePrevious} style={{cursor: 'pointer'}}><i className="fa-solid fa-circle-chevron-left"></i>Previous</button>
                                </div>
                                <div className="right_btns right_btns3">
                                    <button type="button" id="next_btn" onClick={handleNext} style={{cursor: 'pointer'}}><span id='nextBtn'>Next</span><i className="fa-solid fa-circle-chevron-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exam;
