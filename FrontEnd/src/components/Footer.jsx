import React from 'react';
import twit from "../assets/images/icon_tviter.png";
import insta from "../assets/images/icon_instagram.png";
import face from "../assets/images/icon_facebook.png";
import logo from "../assets/images/mid.png";

const Footer = () => {
  return (
    <div className='container mt-5 mb-5'>
    <footer className="footer container-fluid mt-5 mb-5">
      <div className="row mb-5 pb-5">
        <div className="col-md-6 d-flex justify-content-start align-items-center">
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
             <img src={twit} alt='twitter'/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt='twitter'/>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={face} alt='twitter'/>
            </a>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-end align-items-center">
          <div className="logo">
          <img src={logo} alt='twitter'/>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
