import React from 'react';
import { Link } from 'react-router-dom';
import DevPort_Logo from '../DevPort Logo.png';
import GitHubLogo from '../GitHub Logo.png';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Container from 'react-bootstrap/Container';
import { FaGithub } from "react-icons/fa";
import { Button } from 'react-bootstrap';

const SignUp = () => {

return (
  <>
  <Header />
  <Container>
    <div className='mt-5'>
      <a href="https://github.com/login/oauth/authorize?client_id=829a74c5da72aa7b820c" className="mt-5" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button variant="dark" className='w-100 mt-5'>
          <FaGithub size={25} /> 
        </Button>
      </a>
    </div> 
    <div className='text-center fs-6'>Authorize Github</div>
    <Footer fixed={true} />
  </Container>
  </>
);
};

export default SignUp;