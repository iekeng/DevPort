import React from 'react'

const Footer = () => {
  
  return (
    <footer style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', color: 'white'}}>
  <div className="footer">
    <div className="footer-content">
      <div className="footer-section contact">
        <h4>Contact Us</h4>
        <div className="contact">
          <span>
            <i className="fas fa-phone"></i> &nbsp; +1 123-456-789
          </span>
          <span>
            <i className="fas fa-envelope"></i> &nbsp;
            <a href="mailto:devport@devport.com">devport@devport.com</a>
          </span>
        </div>
      </div>
      <div className="footer-section about">
        <h4 className="logo-text">DevPort Copyright &copy; 2023</h4>
        <p>
          Powered by <a href="https://www.github.com">GitHub</a>
        </p>
      </div>
      <div className="footer-section social">
        <h4>Follow Us</h4>
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
)
}

export default Footer;