import React from 'react';

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="footer-text-cont">
        <div className="site-logo">
          <div className="logo footer-color">
            <a href="#" style={{ filter: 'grayscale(100%)' }}>
              <img src="/Assets/footerlogo.svg" alt="Scissor Logo" className="logo-vector1 footer-color" />
            </a>
          </div>
          <div className="social-logo">
            <img src="/Assets/i.fi-social-twitter.svg" alt="twitter-logo" />
            <img src="/Assets/svg.feather.svg" alt="instagram-logo" />
            <img src="/Assets/i.fi-social-linkedin.svg" alt="linkdedin-logo" />
            <img src="/Assets/i.fi-social-facebook.svg" alt="facebook-logo" />
          </div>
        </div>
        <div className="site-navigation">
          <div className="whyres">
            <div className="why">
              <h4 className="footer-heading">Why Scissor?</h4>
              <p>Scissor 101 Integrations & API Pricing</p>
            </div>
            <div className="resources">
              <h4 className="footer-heading">Resources</h4>
              <p>Blog <br />Resource Library Developers <br />App Connectors Support <br />Trust Center Browser Extension Mobile App</p>
            </div>
          </div>
          <div className="solfea">
            <div className="solution">
              <h4 className="footer-heading">Solutions</h4>
              <p>Social Media Digital Marketing Customer Service For Developers</p>
            </div>
            <div className="features">
              <h4 className="footer-heading">Features</h4>
              <p>Branded Links Mobile Links Campaign Management & Analytics <br />QR Code generation</p>
            </div>
          </div>
          <div className="proleg">
            <div className="product">
              <h4 className="footer-heading">Products</h4>
              <p>Link Management <br />QR Codes <br />Link-in-bio </p>
            </div>
            <div className="legal">
              <h4 className="footer-heading">Legal</h4>
              <p>Privacy Policy <br />Cookie Policy <br />Terms of Service <br />Acceptable Use Policy <br />Code of Conduct</p>
            </div>
          </div>
          <div className="company-details">
            <div className="company">
              <h4 className="footer-heading">Company</h4>
              <p>About Scissor <br />Careers <br />Partners <br />Press <br />Contact Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="under">
        <p>Terms of service</p>
        <span> <img src="img/vertical.png" alt="" /></span>
        <p>Security</p>
        <span> <img src="img/vertical.png" alt="" /></span>
        <p>Scissor 2023</p>
      </div>
    </section>
  );
}

export default Footer;
