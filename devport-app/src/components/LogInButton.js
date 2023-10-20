import React from 'react';
import authService from './AuthService';
import { Link } from 'react-router-dom';

function LogInButton() {
  // Check if the user is authenticated. You can use your authentication logic here.
  const checkAuthentication = () => {
    return authService.isAuthenticated();
  };

  return (
    <div>
      {checkAuthentication() ? (
        <Link to="/PortfolioPage">
          <button className="LPbuttonclass" style={{ backgroundColor: 'black' }}>
            Log In
          </button>
        </Link>
      ) : (
        <Link to="/SignUp">
          <button className="LPbuttonclass" style={{ backgroundColor: 'black' }}>
            Log In
          </button>
        </Link>
      )}
    </div>
  );
}

export default LogInButton;
