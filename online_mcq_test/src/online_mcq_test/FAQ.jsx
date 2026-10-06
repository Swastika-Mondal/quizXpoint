import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className="faqpage">
            <div className="container">

            {/* Title & Title Image */}
            <div className="title">
                <h1>FAQ</h1>
                <div className="t_img">
                    {/* <img src="imgs/qu.png" alt="question mark" /> */}
                </div>
            </div>

            {/* FAQ image */}
            <div className="faq">
                <div className="faq_image">
                    <img src="imgs/faq4.png" alt="faq" />
                </div>

                <div className="outer_container">
                    {/* QNA Section */}
                <div className="qna_container">

                    {/* --------Q1-------- */}
                    <div className="qna">
                        <input type="checkbox" name="qa" id="qa1" />
                        <label htmlFor="qa1">
                            <h2>01</h2>
                            <h3>What are the system requirements to take the online exam?</h3>
                        </label>
                        <div className="content">
                            <p>To take the online exam, you need a computer or laptop with a stable internet connection (at least 5 Mbps), a webcam, and a microphone. The system should have an updated web browser (Google Chrome, Firefox, or Safari) and operating system (Windows 10+, macOS 10.13+). Mobile devices or tablets may also be supported, depending on the specific exam guidelines.</p>
                        </div>
                    </div>

                    {/* --------Q2-------- */}
                    <div className="qna">
                        <input type="checkbox" name="qa" id="qa2" />
                        <label htmlFor="qa2">
                            <h2>02</h2>
                            <h3>How do I register for an online exam?</h3>
                        </label>
                        <div className="content">
                            <p>To register, create an account on our website, navigate to the "Exam Registration" section, select your desired exam, and follow the prompts to complete the registration process.</p>
                        </div>
                    </div>

                    {/* --------Q3-------- */}
                    <div className="qna">
                        <input type="checkbox" name="qa" id="qa3" />
                        <label htmlFor="qa3">
                            <h2>03</h2>
                            <h3>Can I reschedule or cancel my exam?</h3>
                        </label>
                        <div className="content">
                            <p>Yes, you can reschedule or cancel your exam up to 48 hours before the scheduled time. To do this, log in to your account, go to the 'My Exams' section, and select 'Reschedule' or 'Cancel'. Any rescheduling or cancellation within 48 hours may be subject to a fee or may not be allowed, depending on the exam's specific policy.</p>
                        </div>
                    </div>

                    {/* --------Q4-------- */}
                    <div className="qna">
                        <input type="checkbox" name="qa" id="qa4" />
                        <label htmlFor="qa4">
                            <h2>04</h2>
                            <h3>What do I do if I lose internet connection during the exam?</h3>
                        </label>
                        <div className="content">
                            <p>If you lose internet connection during the exam, most systems will allow you a grace period (usually 5-10 minutes) to reconnect. If the problem persists, contact the support team immediately using the emergency contact number or email provided to you prior to the exam. Some exams may have a rescheduling option in case of significant technical issues.</p>
                        </div>
                    </div>

                    {/* --------Q5-------- */}
                    <div className="qna">
                        <input type="checkbox" name="qa" id="qa5" />
                        <label htmlFor="qa5">
                            <h2>05</h2>
                            <h3>How do I submit my answers once the exam is complete?</h3>
                        </label>
                        <div className="content">
                            <p>Your answers are automatically saved as you progress through the exam. Once you reach the end of the exam, you will see a ‘Submit’ button. Click on it to submit your answers. If you run out of time, the system will auto-submit your responses.</p>
                        </div>
                    </div>

                    {/* --------Q6-------- */}
                    <div className="qna">
                        <input type="checkbox" name="qa" id="qa6" />
                        <label htmlFor="qa6">
                            <h2>06</h2>
                            <h3>How will I receive my exam results?</h3>
                        </label>
                        <div className="content">
                            <p>The delivery of exam results depends on the type of exam. Some exams provide immediate feedback upon submission, while others may take several days or weeks. You will receive an email notification when your results are available, and you can check your scores by logging into your account under the 'My Results' section.</p>
                        </div>
                    </div>

                    {/* --------Q7-------- */}
                    <div className="qna">
                        <input type="checkbox" name="qa" id="qa7" />
                        <label htmlFor="qa7">
                            <h2>07</h2>
                            <h3>What should I do if I encounter technical issues during the exam?</h3>
                        </label>
                        <div className="content">
                            <p>If you face any technical issues (e.g., problems with loading questions or webcam issues), contact the technical support team immediately. You can find their contact details in your exam invitation email or on the website's support page.</p>
                        </div>
                    </div>

                    {/* --------Q8-------- */}
                    <div className="qna">
                        <input type="checkbox" name="qa" id="qa8" />
                        <label htmlFor="qa8">
                            <h2>08</h2>
                            <h3>Is my personal information and exam data secure?</h3>
                        </label>
                        <div className="content">
                            <p>Yes, your personal information and exam data are stored securely and comply with industry-standard security protocols. The system uses encryption to protect your data, and only authorized personnel have access to it.</p>
                        </div>
                    </div>

                    {/* --------Q9-------- */}
                    <div className="qna">
                        <input type="checkbox" name="qa" id="qa9" />
                        <label htmlFor="qa9">
                            <h2>09</h2>
                            <h3>What identification documents are required for the exam?</h3>
                        </label>
                        <div className="content">
                            <p>You are required to present a valid government-issued photo ID (e.g., passport, driver’s license, or national ID) before the exam. The exact requirements may vary depending on the exam provider, so check the guidelines sent in your confirmation email.</p>
                        </div>
                    </div>

                    {/* --------Q10-------- */}
                    <div className="qna">
                        <input type="checkbox" name="qa" id="qa10" />
                        <label htmlFor="qa10">
                            <h2>10</h2>
                            <h3>Can I use notes or other study materials during the exam?</h3>
                        </label>
                        <div className="content">
                            <p>Most online exams are strictly closed-book, and you are not allowed to use any notes, books, or other study materials unless explicitly stated. Some exams may permit specific resources, so always review the exam guidelines before starting.</p>
                        </div>
                    </div>

                    {/* Additional Questions (Q11 to Q14) can be added similarly */}

                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FAQ;
