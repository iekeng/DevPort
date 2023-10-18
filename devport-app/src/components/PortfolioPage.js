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
            case 'Education':
                return <Education />;
            case 'Skills':
                return <Skills />;
            case 'WorkExperience':
                return <WorkExperience />;
            case 'Projects':
                return <Projects />;
            case 'PersonalDetails':
                return <PersonalDetails />;
            case 'Review':
                return <Review />;
            default:
                return null;
        }
    };

    return (
        <div>
            <section className="header">
                <Link to="/SignUpForm">
                    <img id="logo" src={DevPort_Logo} alt="Logo" />
                </Link>
                <ProfileDisplay />
            </section>
            <section className="center-content">
                <nav>
                    <ul>
                        <li>
                            <button onClick={() => setActiveSection('Education')} className='nav-button'>
                                Education
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('Skills')} className='nav-button'>
                                Skills
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('WorkExperience')} className='nav-button'>
                                Work Experience
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('Projects')} className='nav-button'>
                                Projects Details
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('PersonalDetails')} className='nav-button'>
                                Personal Details
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('Review')} className='nav-button'>
                                Review
                            </button>
                        </li>
                    </ul>
                </nav>
                <AccessTokenProvider>
                    {renderSection()}
                </AccessTokenProvider>
            </section>
        </div>
    );
};

export default PortfolioPage;
