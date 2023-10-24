import React from 'react'

const Footer = () => {
  
  return (
    <footer>
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
)
}

export default Footer;