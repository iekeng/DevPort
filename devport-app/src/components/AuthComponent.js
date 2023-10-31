import React , { useEffect } from 'react';
import axios from 'axios';

const AuthComponent = ({ setAccessToken }) => {
  useEffect(() => {
    const handleGithubCallback = async () => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const code = urlParams.get('code');

      if (code) {
        try {
          const response = await axios.get(`http://165.227.108.97/callback/${code}`);
          const accessToken = response.data;

          if (accessToken !=="") {
            console.log('Access token:', accessToken);
            // Store the accessToken in localStorage
            localStorage.setItem('accessToken', accessToken);
            console.log(localStorage.getItem('accessToken'));
          }

          // Update the access_token in the parent component's state
          setAccessToken(accessToken);
        } catch (error) {
          console.error(error);
        }
      }
    };

    handleGithubCallback();
  }, []);

  return null; // This component doesn't render anything
};

export default AuthComponent;
