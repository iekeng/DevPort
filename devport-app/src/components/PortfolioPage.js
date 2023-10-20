import React, { useState } from 'react';
import DevPort_Logo from '../DevPort Logo.png';
import Education from './Education';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import PersonalDetails from './PersonalDetails';
import Projects from './Projects';
import Review from './Review';
import ProfileDisplay from './ProfileDisplay';
import { AccessTokenProvider } from './AccessTokenContext';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
    const [activeSection, setActiveSection] = useState('Education');

    const renderSection = () => {
        switch (activeSection) {
            case 'PersonalDetails':
                return <PersonalDetails />;
            case 'Education':
                return <Education />;
            case 'Skills':
                return <Skills />;
            case 'WorkExperience':
                return <WorkExperience />;
            case 'Projects':
                return <Projects />;
            case 'Review':
                return <Review />;
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
                <Link to="/SignUpForm">
                    <img id="logo" src={DevPort_Logo} alt="Logo" />
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
                            <button onClick={() => setActiveSection('Review')}
                            className='nav-button'
                            style={activeSection === 'Review' ? buttonStyle : {}}>
                                Review
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