import "./Header.css"
import Navbar from "./Navbar";

// import { motion } from "framer-motion";
function Header(){
    return(
      
        <header>
        <Navbar/>
    <div className='main_container1'>
        <p>Training, Development and Placement</p>
        <h1 className="para1">We Illuminate Your Path To Success In The World Of Technology</h1>
        <p className='main_para'>We make students job ready after providing well-planned training in Python, Data Science, Machine Learning, AI, Data Analysis, Prompt Engineering, full stack development, basic computer, mechanical, Electronic & civil software & digital marketing in Mohali &  Chandigarh. We provide them well guidance, study materials, and also doubt sessions so that they excel in their skills. we want every student to become independent and earn a handsome salary so that they can live happily.</p>
        <button className='btn1'>Contact Us</button>
        <button className='btn2'>New Year Offer</button>
    </div>
    <div className='main_students'>
        <p>Education is the key to a bright future</p>
        <div className='total'>25642+ Students</div>
        <div className='experience'>3+ Years Experience</div>
    </div>
    </header>
    )
}

export default Header;