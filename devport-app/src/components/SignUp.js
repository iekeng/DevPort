import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DevPort_Logo from '../DevPort Logo.png';
// import authService from './AuthService';
import GitHubLogo from '../GitHub Logo.png';

const SignUp = () => {
    // const [oauthState, setOauthState] = useState(null);
    // const navigate = useNavigate();

    const authorizeGitHubSignup = () => {
        // Redirect the user to the GitHub authorization URL
        window.location.href = 'http://165.227.108.97/oauth';
    };

    return (
        <div className="container">
            <div className="header">
                <Link to='/'>
                    <img id="logo" src={DevPort_Logo} alt="Logo" style={{width: '97px', height: '97px', marginTop: '10px'}} />
                </Link>
            </div>
            <h2 id='signupsubtitle'> Sign Up</h2>
            <button type='submit' className="LSbutton" onClick={authorizeGitHubSignup} style={{borderRadius: '5px', boxShadow: '5px 5px 5px black'}}> 
            <img src={GitHubLogo} alt="GitHub Logo" id='githublogo' />Authorize with GitHub</button>
        </div>
    );
};

export default SignUp;