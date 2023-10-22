import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DevPort_Logo from '../DevPort Logo.png';
import authService from './AuthService';
import GitHubLogo from '../GitHub Logo.png';

const SignUp = () => {
    const [oauthState, setOauthState] = useState(null);
    const clientId = '829a74c5da72aa7b820c';
    const navigate = useNavigate();

    const authorizeGitHubSignup = async () => {
        try {
        // Generate a random state for security
        const state = Math.random().toString(36).substring(7);
        setOauthState(state);
    
        // Redirect the user to the GitHub authorization URL
        const githubAuthUrl = `http://165.227.108.97/oauth`;
        window.location.href = githubAuthUrl;

        // After the GitHub OAuth process is complete, you can sign up the user
        // and store their access token using authService
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            const response = await authService.signUpWithGitHub(code);
            if (response.access_token) {
                authService.saveToken(response.access_token);
            }
            console.log('Redirecting to /PortfolioPage');
            navigate('/PortfolioPage');
        }
        } catch (error) {
            console.error('Error authorizing with GitHub:', error);
        }
    };

    return (
        <div className="container">
            <div className="header">
                <Link to='/'>
                    <img id="logo" src={DevPort_Logo} alt="Logo" />
                </Link>
            </div>
            <h2 id='signupsubtitle'> Sign Up</h2>
            <button type='submit' className="LSbutton" onClick={authorizeGitHubSignup} style={{borderRadius: '5px', boxShadow: '5px 5px 5px black'}}> 
            <img src={GitHubLogo} alt="GitHub Logo" id='githublogo' />Authorize with GitHub</button>
        </div>
    );
};

export default SignUp;