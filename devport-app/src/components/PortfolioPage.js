import React, { useState } from 'react';
import DevPortLogo from '../DevPort Logo.png';
import Education from './Education';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import PersonalDetails from './PersonalDetails';
import Projects from './Projects';
import GenerateCVButton from './GenerateCVButton';
import ProfileDisplay from './ProfileDisplay';
import { AccessTokenProvider } from './AccessTokenContext';
import AuthComponent from './AuthComponent';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState('PersonalDetails');
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessTtoken'));
  const [userId, setUserId] = useState(localStorage.getItem('user_id'));

  const handleSectionChange = (nextSection) => {
    setActiveSection(nextSection);
  };

  const renderSection = () => {
    switch (activeSection) {
        case 'PersonalDetails':
            return <PersonalDetails onSave={handleSectionChange} access_token={accessToken} />;
        case 'Education':
            return <Education userId={userId} onSave={handleSectionChange} access_token={accessToken} />;
        case 'Skills':
            return <Skills userId={userId} onSave={handleSectionChange} access_token={accessToken} />;
        case 'WorkExperience':
            return <WorkExperience userId={userId} onSave={handleSectionChange} access_token={accessToken} />;
        case 'Projects':
            return <Projects userId={userId} onSave={handleSectionChange} access_token={accessToken} />;
        case 'GenerateCVButton':
            return <GenerateCVButton CV userId={userId} onSave={handleSectionChange} access_token={accessToken} />;
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
          <img
            id="logo"
            src={DevPortLogo}
            alt="Logo"
            style={{ width: '97px', height: '97px', marginTop: '10px' }}
          />
        </Link>
        <section className="content-container">
          <section className="content-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <nav>
                    <ul>
                        <li>
                            <button onClick={() => setActiveSection('PersonalDetails')} className='nav-button' style={activeSection === 'PersonalDetails' ? buttonStyle : {}}>
                                Personal Details
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('Education')} className='nav-button' style={activeSection === 'Education' ? buttonStyle : {}}>
                                Education
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('Skills')} className='nav-button' style={activeSection === 'Skills' ? buttonStyle : {}}>
                                Skills
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('WorkExperience')} className='nav-button' style={activeSection === 'WorkExperience' ? buttonStyle : {}}>
                                Work Experience
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('Projects')} className='nav-button' style={activeSection === 'Projects' ? buttonStyle : {}}>
                                Projects Details
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('GenerateCVButton')} className='nav-button' style={activeSection === 'GenerateCVButton' ? buttonStyle : {}}>
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
          {renderSection()}
      </section>
    </div>
  );
};

export default PortfolioPage;
