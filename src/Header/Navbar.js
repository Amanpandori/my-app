import React from 'react'
import main_logo from '../pgtech.jpeg';

const Navbar = () => {
  return (
    <div>
      <nav>
      <div className="main_logo" >
        <img src = {main_logo} className='main_logo'></img>
      </div>
      <ul>
        <li><a herf='#'>Home</a></li>
        <li><a herf='#'>Courses</a></li>
        <li><a herf='#'>Contact Us</a></li>
        <li><a herf='#'>Company</a></li>
      </ul>      
    </nav>
    </div>
  )
}

export default Navbar
