import React from 'react';
import icon1 from "../assets/images/apply.png";
import icon2 from '../assets/images/continue.png';
import icon3 from "../assets/images/check.png";
import { Link } from 'react-router-dom';


const Services = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="mb-5" style={{color: "white", fontSize: "50px", letterSpacing: "1.8px"}}>Services</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="icon mb-3">
            <img src={icon1} alt="icon1" />
          </div>
          <Link to="/form" className="link-custom">
            Apply for a visa
          </Link>
        </div>
        <div className="col-md-4">
          <div className="icon mb-3">
            <img src={icon2} alt="icon2" />
          </div>
          <Link to="" className="link-custom">Continue your application</Link>
        </div>
        <div className="col-md-4">
          <div className="icon mb-3">
            <img src={icon3} alt="icon3" />
          </div>
          <Link to="/checkstatus" className="link-custom">
            Check status
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
