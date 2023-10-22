import React from 'react'
import { Link } from 'react-router-dom'
import DevPort_Logo from '../DevPort Logo.png'
import './LandingPage.css'
import ReactLogo from '../React_Logo.png'
import GitHubLogo from '../GitHub Logo.png'
import DigitalOceanLogo from '../DigitalOcean-Logo.png'
import NodejsLogo from '../Nodejs_Logo.png'
import LogInButton from './LogInButton'

const LandingPage = () => {
  
  return (
    <div id='LPContainer'>
      <header id='LP-Header'>
        <img id="logo" src={DevPort_Logo} alt="Logo" />
        <div className="HLPbuttoncontainer">
        <div style={{ marginRight: '10px' }}>
      </div>
        <div id='LPbuttons'>
          <LogInButton />
          </div>
        </div>
      </header>
      <section id='Valueproposition'>
            <h1 id='Valp-h1'>Elevate Your Profile</h1>
            <p className='Valueproposition-p' style={{marginTop: 0}}>DevPort streamlines the creation of a professional online portfolio for developers. With seamless GitHub integration, effortless profile setup, stunning design, and security at its core, DevPort empowers you to stand out in the tech world. Join DevPort and unlock your full potential in just a few clicks.</p>
            <h1 id='Valp-h1' style={{marginTop: '5px', marginBottom: '10px'}}>How it Works</h1>
            <p className='Valueproposition-p'>Click the Get Started button, you'll be redirected to authenticate with your GitHub account. On successful authentication, you're redirected to the portfolio page where you fill in your details, when you're done, click the Review button to take a glimpse of your newly created portfolio. We also have download option for users to download their resumes in PDF format</p>
            <Link to='/SignUp' style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column-reverse', justifyContent: 'center', alignItems: 'center'}}><button className="LPbuttonclass" style={{ backgroundColor: 'black', borderRadius: '20px'}}>Get Started</button></Link>
      </section>
      <section className="partners">
          {/* <h1>Partners</h1> */}
            <div className="partners-logos" style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-around'}}>
            <img className="logo" src={ReactLogo} alt="React Logo" style={{ width: '4%', marginRight: '30px' }} />
            <img className="logo" src={DigitalOceanLogo} alt="Digital Ocean Logo" style={{ width: '8%', marginRight: '5px' }} />
            <img className="logo" src={GitHubLogo} alt="GitHub Logo" style={{ width: '4%', marginRight: '30px' }} />
            <img className="logo" src={NodejsLogo} alt="Nodejs Logo" style={{ width: '8%', marginRight: '30px' }} />
            </div>
      </section>
    </div>
  )
}

export default LandingPage;