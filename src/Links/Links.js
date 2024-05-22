
import "./Links.css";
import img from "../pgtech.jpeg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";



import React from 'react'

const Links = () => {
  return (
    <div className="main">
      <div className="logo_para">
      <div className="logo">
        <img src={img} alt="someting went wrong"></img>
      </div>
      <div className="para">
        <p>Visit or call Prerna Gati Technology Pvt. Ltd. institute in Mohali if you are looking to make your career in the technical field like in web dev, want to learn Python with AI/ML/ DS, want to learn electrical software, basic computer skills like excel, Ms-office, learn digital marketing as a beginner & many more.</p>
      </div>
      </div>
      <div className="social_links">
        <div className="boxs">
          <h3>Social Links</h3>
          <a href="https://www.facebook.com/pgtechsolution"><FaSquareFacebook />Facebook</a>
          <a href="https://www.instagram.com/pgtechsolution?igshid=YmMyMTA2M2Y%3D%20"><FaInstagram />
Instagram</a>
          <a href="https://www.linkedin.com/company/prerna-gati-technology-pvt-ltd"><FaLinkedin />
LinkedIn</a>
          <a href=""><MdEmail />
Email</a>
          <a href=""><FaWhatsapp />
Whatsapp</a>
         

        </div>
        <div className="boxs"></div>
        <div className="boxs"></div>
        <div className="boxs"></div>
      </div>
    </div>
  )
}

export default Links;

