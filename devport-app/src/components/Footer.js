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
            <i className="fas fa-phone">+1 123-456-789</i> &nbsp;
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
        <p>
          Powered by <a href="https://www.github.com">GitHub</a>
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
//   <footer style={{display: 'flex', flexDirection: 'column-reverse', justifyContent: 'space-between', alignItems: 'center'}}>
//   <p style={{display: 'inline-block', fontWeight: 'bold'}}>Copyright &copy; 2023</p>
//   <p style={{ fontWeight: 'bold'}}>Contact Us: <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
// </footer>
)
}

export default Footer;