import React from 'react';
import './Links.css';
import image from './pgtech_logo.jpeg';
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

function Links(){
  return (
    <div>
      <div className='main_footer'>
        <div className='footer_links'>
          
           <div className='quick_links'>
            
            <h2>Quick Links</h2>
            <ul>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Contact Us</a></li>
              <li><a href='#'>Our Gallery</a></li>
              <li><a href='#'>Blogs</a></li>
              <li><a href='#'>Privacy Policy</a></li>
              <li><a href='#'>Terms & Conditions</a></li>
            </ul>
           </div>
           <div className='contact_us'>
            <h2>Contact Us</h2>
            <div className='footer_location'>
              <p><CiLocationOn/><br></br>F-125, Phase 8B,<br></br> Sector 74, <br></br>Punjab 140308</p>
            </div>
            <p><FaPhoneAlt/> <a href='tel:+91 98155 95408'>+91 98155 95408</a></p>
            <p><FaPhoneAlt/> <a href='tel:+91 77173 13727'>+91 77173 13727</a></p>
            <div className='whatsapp'><ImWhatsapp /><a href='https//whatsapp.com +91 98155 95408'></a></div>
           </div>
           <div className='follow_us'>
            <div className='footer_para'>
                <p>Visit or call Prerna Gati Technology Pvt. Ltd. institute in Mohali if you are looking to make your career in the technical field like in web dev, want to learn Python with AI/ML/ DS, want to learn electrical software, basic computer skills like excel, Ms-office, learn digital marketing as a beginner & many more.</p>
                <h2>Follow Us</h2>
                
                <div className='icon icon1'><a href='https://www.facebook.com/pgtechsolution'><TiSocialFacebook /></a></div>
                <div className='icon icon2'><a href=''><FaTwitter /></a></div>
                <div className='icon icon3'><a href='https://pgtechsolutions.com/'><FaGoogle /></a></div>
                <div className='icon icon4'><a href='https://www.linkedin.com/company/prerna-gati-technology-pvt-ltd'><FaLinkedinIn /></a></div>
               <div className='icon icon5'><a href='https://www.instagram.com/pgtechsolution?igshid=YmMyMTA2M2Y%3D%20'><FaInstagram /></a></div>

            </div>
           </div>
        </div>
      </div>
        <div className='copyright'>Copyright @ 2023 pgtechsolutions.com All Rights Reserved by Pg Tech.pvt.ltd</div>
    </div>
  )
}

export default Links;
