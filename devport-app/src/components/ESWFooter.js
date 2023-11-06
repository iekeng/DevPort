import React, { useState, useEffect } from 'react';

const ESWFooter = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const pageHeight = document.body.scrollHeight - window.innerHeight;
    setShowFooter(scrollY >= pageHeight + 5);
  };

  return (
    <footer style={{ transition: 'bottom 0.5s', bottom: showFooter ? '0' : '-100px' }}>
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section-contact">
                    <p>Contact Us</p>
            <div className="contact">
                <span>
                <i className="fas fa-phone">+254 737 336 511</i> &nbsp;
                </span>
                <br />
                <span>
                <i className="fas fa-envelope">
                <a href="mailto:devport@iomititi.tech">devport@iomititi.tech</a>
                </i> &nbsp;
                </span>
            </div>
        </div>
        <div className="footer-section-about">
            <p className="logo-text">DevPort Copyright &copy; 2023</p>
            <p style={{paddingLeft: '20px'}}>
                Powered by <a href="https://www.github.com" target="_blank">GitHub</a>
            </p>
        </div>
        <div className="footer-section-social">
            <p>Follow Us</p>
        <div className="social-links">
          {/* <a href="https://www.facebook.com" target="_blank">
            <i className="fab fa-facebook">@DevPort</i>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <i className="fab fa-instagram">@DevPort</i>
          </a> */}
          <a href="https://www.twitter.com" target="_blank">
            <i className="fab fa-twitter">@DevPort</i>
          </a>
          {/* <a href="https://www.linkedin.com" target="_blank">
            <i className="fab fa-linkedin">@DevPort</i>
          </a> */}
          </div>
      </div>
    </div>
  </div>
    </footer>
  );
};

export default ESWFooter;
