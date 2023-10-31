import React from 'react';
import { Link } from 'react-router-dom';
import DevPort_Logo from '../DevPort Logo.png';
import GitHubLogo from '../GitHub Logo.png';

const SignUp = () => {

    return (
        <div className="container">
            <div className="header">
                <Link to='/'>
                    <img id="logo" src={DevPort_Logo} alt="Logo" style={{width: '97px', height: '97px', marginTop: '10px'}} />
                </Link>
            </div>
            <h2 id='signupsubtitle'> Sign Up</h2>
            <button type='submit' className="LSbutton" style={{ borderRadius: '5px', boxShadow: '5px 5px 5px black', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <a href="https://github.com/login/oauth/authorize?client_id=829a74c5da72aa7b820c" style={{ display: 'flex', textDecoration: 'none', alignItems: 'center' }}>
                <img src={GitHubLogo} alt="GitHub Logo" id='githublogo' style={{ marginRight: '5px' }} />
                Authorize with GitHub
                </a>
            </button>
        </div>
    );
};

export default SignUp;