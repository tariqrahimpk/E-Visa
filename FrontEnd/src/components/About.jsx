import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="mb-4" style={{color: "white", fontSize: "50px", letterSpacing: "1.8px"}}>ABOUT E-VISA</h1>
          <div style={{color:"white"}}>
          <p>Ministry of Foreign Affairs of Kyrgyzstan has launched e-Visa portal to facilitate visa issuance process for genuine travellers.</p>
          <p>Electronic visa application does not require more information than traditional paper application and it grants the same right to enter Kyrgyzstan territory as ordinary sticker-visa in the passport.</p>
          <p>Applying for a visa through this portal has lots of advantages. No need to make an appointment or present original documents to the Embassy or Consular Office.</p>
          <p>All you need is internet connection, credit or debit card for making payment and scanned copies of your documents.</p>
          <p>You can check if you are eligible for e-Visa by going Home Page Get information Do I need visa? and selecting your country/region of travel document. Each traveler must obtain a separate e-Visa, including infants and children (even if children/infants are included in their parents’ passports).</p>
          </div>
        </div>
        <Link to="/form" type="submit" className="btn w-50 bg-success text-white" >Apply For A Visa</Link>
      </div>
    </div>
  );
}

export default About;
