// Navbar.js

import React from 'react';
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';

export const Navbar = () => {


  return (
    <>
    <div className='container'>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/">
          <img style={{ width: "150px" }} src={logo} alt='logo' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div style={{
            fontSize: "15px",
            letterSpacing: "0.8px"
          }} className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav  mx-auto mb-2 mb-lg-0 ">

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SERVICES
                </a>
                <ul className="dropdown-menu" style={{ fontSize: "10px" }}>
                  <li><Link to="/form" className="dropdown-item" >Apply for a Visa</Link></li>
                  <li><a className="dropdown-item" href="#">Continue your application</a></li>

                  <li><Link to="/checkstatus" className="dropdown-item" href="#">Check status</Link></li>
                  <li><a className="dropdown-item" href="#">Visa transfer to new passport</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">ABOUT KYRGYZSTAN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  INFORMATION

                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  CONTACT US

                </a>
              </li>

            </ul>
            <div className="d-flex " >
              <Link to="/signin" className='olo'>Log in to personal account
              </Link>
            </div>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
}


