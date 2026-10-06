import React from 'react';
import './ErrorPage.css'; // Assuming you'll send the CSS later for styling

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>404</h1>
            <div className="error-img">
                <img src="imgs/404-error-page.png" alt="Error" />
            </div>
            <h3 className='error_txt'>Oops! We couldn't find that page.</h3>
            <h4 className='error_txt'>
                It looks like the page you're looking for doesn't exist. You can return to the homepage
                or contact us for help.
            </h4>
            <div className="btns">
                <button className="btn home" onClick={() => window.location.href = '/'}>Go Back to Home</button>
                <button className="btn contact" onClick={() => window.location.href = '/contact'}>Contact Us</button>
            </div>
        </div>
    );
};

export default ErrorPage;
