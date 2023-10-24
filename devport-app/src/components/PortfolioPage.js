import React, { useState } from 'react';
import DevPort_Logo from '../DevPort Logo.png';
import Education from './Education';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import PersonalDetails from './PersonalDetails';
import Projects from './Projects';
import GenerateCVButton from './GenerateCVButton';
import ProfileDisplay from './ProfileDisplay';
import { AccessTokenProvider } from './AccessTokenContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PortfolioPage = () => {
    const [activeSection, setActiveSection] = useState('PersonalDetails');
    const userId = localStorage.getItem('userId');

    const handleSectionChange = (nextSection) => {
        setActiveSection(nextSection);
    };

    // const getAccessToken = async () => {
    //     const code = window.location.search.split('code=')[1];
    //     const response = await axios.post("https://github.com/login/oauth/access_token", {
    //         client_id: "829a74c5da72aa7b820c",
    //         client_secret: "dee0a345dbb4d993fefbeacf7c5372b15173b083",
    //         code: code,
    // }, {
    //     headers: {
    //         "Accept": "application/json"
    //     }
    // }) 
    // if (response) {
    //     if (response.status !== 200) {
    //         console.log(response.stausText);
    //         // res.status(500).send("Error excahnging code for token");
    //         return;
    //     }
    //     const accessToken = response.data.access_token;
    //     console.log("accessToken", accessToken);

    //     // res.json({token: accessToken});
    // }
    // }

    // getAccessToken();

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