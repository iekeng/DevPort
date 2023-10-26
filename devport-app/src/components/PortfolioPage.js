import React, { useState, useEffect } from 'react';
import DevPort_Logo from '../DevPort Logo.png';
import Education from './Education';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import PersonalDetails from './PersonalDetails';
import Projects from './Projects';
import GenerateCVButton from './GenerateCVButton';
import ProfileDisplay from './ProfileDisplay';
import { AccessTokenProvider } from './AccessTokenContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PortfolioPage = () => {
    const [activeSection, setActiveSection] = useState('PersonalDetails');
    const userId = localStorage.getItem('userId');
    const navigate = useNavigate();
    const client_Id = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const client_Secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;


    const handleSectionChange = (nextSection) => {
        setActiveSection(nextSection);
    };
    
    useEffect(() => {
        // Check if there's a GitHub OAuth code in the URL
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            // Call your function to exchange the code for an access token
            getAccessToken(code);
        }
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    const getAccessToken = async (code) => {
        try {
            const response = await axios.post("https://github.com/login/oauth/access_token", {
                params: {
                    client_id: client_Id,
                    client_secret: client_Secret,
                    code: code,
                },
            }, {
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.status === 200) {
                // Access token received successfully
                const accessToken = response.data.access_token;
                console.log("Access Token:", accessToken);

                // Store the access token in localStorage
                localStorage.setItem('githubAccessToken', accessToken);
            }
        } catch (error) {
            console.error('Error exchanging code for token', error);
        } 
        // finally {
        //     // Redirect the user to the desired section or page
        //     navigate('/PortfolioPage'); // Change this to the appropriate route
        // }
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'PersonalDetails':
                return <PersonalDetails onSave={handleSectionChange} />;
            case 'Education':
                return <Education userId={userId} onSave={handleSectionChange} />;
            case 'Skills':
                return <Skills userId={userId} onSave={handleSectionChange} />;
            case 'WorkExperience':
                return <WorkExperience userId={userId} onSave={handleSectionChange} />;
            case 'Projects':
                return <Projects userId={userId} onSave={handleSectionChange} />;
            case 'GenerateCVButton':
                return <GenerateCVButton CV userId={userId} onSave={handleSectionChange} />;
            default:
                return null;
        }
    };

    let buttonStyle = {
        color: 'black',
        textDecoration: 'underline',
      };
      
      if (!activeSection) {
        buttonStyle = {
            ...buttonStyle,
            color: 'white',
            textDecoration: 'none',
            };
        }

    return (
        <div>
            <section className="header">
                <Link to="/">
                    <img id="logo" src={DevPort_Logo} alt="Logo" style={{width: '97px', height: '97px', marginTop: '10px'}}/>
                </Link>
            <section className="content-container" >
                <section className='content-container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center',
    flexDirection: 'column'}}>
                <nav>
                    <ul>
                        <li>
                            <button onClick={() => setActiveSection('PersonalDetails')}
                            className='nav-button'
                            style={activeSection === 'PersonalDetails' ? buttonStyle : {}}>
                                Personal Details
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('Education')}
                            className='nav-button'
                            style={activeSection === 'Education' ? buttonStyle : {}}>
                                Education
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('Skills')}
                            className='nav-button'
                            style={activeSection === 'Skills' ? buttonStyle : {}}>
                                Skills
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('WorkExperience')}
                            className='nav-button'
                            style={activeSection === 'WorkExperience' ? buttonStyle : {}}>
                                Work Experience
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('Projects')}
                            className='nav-button'
                            style={activeSection === 'Projects' ? buttonStyle : {}}>
                                Projects Details
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('GenerateCVButton')}
                            className='nav-button'
                            style={activeSection === 'GenerateCVButton' ? buttonStyle : {}}>
                                Generate CV
                            </button>
                        </li>
                    </ul>
                </nav>
                </section>
                <ProfileDisplay />
                </section>
                </section>
                <section className="center-content">
                <AccessTokenProvider>
                    {renderSection()}
                </AccessTokenProvider>
            </section>
        </div>
    );
};

export default PortfolioPage;