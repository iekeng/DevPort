import React, { useState, useEffect } from 'react';
// import Education from './Education';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import PersonalDetails from '../components/PersonalDetails';
// import Projects from './Projects';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const PortfolioPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const now = (step/4) * 100;
  const handleNext = () => {
    setStep(step + 1);
  };
 
  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSectionChange = (nextSection) => {
    // const { name, value } = event.target;
    // setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const handleGithubCallback = async () => {
      const queryString = window.location.searchconst;
      const urlParams = new URLSearchParams(queryString);
      const code = urlParams.get('code');

      if (code) {
        try {
          const response = await axios.get(`http://localhost:4000/callback/${code}`);
          const accessToken = response.data.token;

          if (accessToken) {
            console.log(accessToken);
            // Store the accessToken in localStorage
            localStorage.setItem('accessToken', accessToken);
            console.log(localStorage.getItem('accessToken'));
          }

          // Update the access_token in the parent component's state
          // setAccessToken(accessToken);
        } catch (error) {
          console.error(error);
        }
      }
    };

    handleGithubCallback();
  }, []);

  return (
    <>
    <Header />
    <Container>
      <Form> 
      <ProgressBar now={now} label={`${Math.trunc(now)}%`}/>
      </Form>
    </Container>
    </>
  );
};

export default PortfolioPage;
