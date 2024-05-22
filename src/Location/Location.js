
import "./Location.css";

import React from 'react'
import { CiLocationOn } from "react-icons/ci";

const Location = () => {
  return (
    <div className="our_location">
        <h2>Our Location</h2>
        <div className="address">
      <div className="location">
      <CiLocationOn />
         <p>F-125, Ground Floor, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 140308</p>
      </div>
      <div className="map" >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1715.1797995264983!2d76.68991018986405!3d30.7082896018616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef04ff3c1d39%3A0x79c66e6cfc6e5cc6!2sDesi%20Urban%20Chai!5e0!3m2!1sen!2sin!4v1715281741945!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    </div>
  )
}

export default Location;
