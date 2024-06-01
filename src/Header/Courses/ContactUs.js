import React from 'react'
import './ContactUs.css'
import DropdownList from './Dropdown';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import Links from '../../Footer/Links';
const options = [
  { label: 'select' },
  { label: 'Computer Science' },
  { label: 'Civil' },
  { label: 'Mechanical' },
  { label: 'Electronics' },

];

const ContactUs = () => {
  return (
    <div>
      <div className='main_contact'>
        <div className='contact_us2'><h2 className='info2'>Contact Info</h2>
          <FaMapLocationDot /><p>F-125, Ground Floor, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 1403086</p>
          <h2 className='info2'>Phone</h2>
          <div className='phone'><p><FaPhoneAlt />9815595408</p>
          <p><FaPhone />7717313727</p></div>
          <h2 className='info2'>Email</h2>
          <p>info@pgtechsolutions.com</p>
          <h2 className='info2'>Timing</h2>
          <p>10am to 6 pm
            Monday to Friday</p>
            {/* <h2 className='info2'>Social Media</h2>
            <div className='icon icon1'><a href='https://www.facebook.com/pgtechsolution'><TiSocialFacebook /></a></div>
                <div className='icon icon2'><a href=''><FaTwitter /></a></div>
                <div className='icon icon3'><a href='https://pgtechsolutions.com/'><FaGoogle /></a></div>
                <div className='icon icon4'><a href='https://www.linkedin.com/company/prerna-gati-technology-pvt-ltd'><FaLinkedinIn /></a></div>
               <div className='icon icon5'><a href='https://www.instagram.com/pgtechsolution?igshid=YmMyMTA2M2Y%3D%20'><FaInstagram /></a></div>
               <div className='whatsapp'><ImWhatsapp /><a href='https//whatsapp.com +91 98155 95408'></a></div> */}
          </div>
        <div className='contact_form'></div>
          <form action='/contact' method='post'>
            <h2>Enquiry Form</h2>
            <input type='text' name='name' placeholder='Name' required />
            <input type='email' name='email' placeholder='Email' required />
            <input type='number' name='number' placeholder='Phone' required/>
            
              {/* <select name='category' required>select</select>
              <select name='category' required>Computer Science</select>
              <select name='category' required>Civil</select>
              <select name='category' required>Mechanical</select>
              <select name='category' required>Electronics</select> */}
              {/* <option>select</option>
              <option>Computer Science</option>
              <option>Civil</option>
              <option>Mechanical</option>
              <option>Electronics</option> */}
              <div className="App">
            <DropdownList options={options} />
        </div>


            
            <textarea name='message' placeholder='Type Your Query' required></textarea>
            <input type='submit' name='submit' value='Submit' className='submit_btn'/>
          </form>
          </div>
          <Links/>
        
      </div>
    
  )
}

export default ContactUs;
