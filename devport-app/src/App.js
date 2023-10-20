import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import PortfolioPage from './components/PortfolioPage';
import './components/PortfolioPage.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/PortfolioPage" element={<PortfolioPage />} />
    </Routes>
    {/* <PortfolioPage /> */}
    <Footer />
  </Router>
  );
}

export default App;