import React from 'react'
import './Our_members.css'
// import Body from './Body'

const Our_members = ({img,name}) => {
//   console.log(DATA)
  return (
    <div>
       <div className='main_box'>
    <div className='box1'>
    <h2>Our <span>Expert</span> Members</h2>
    <h1>Behind the Great Success of PgTech Pvt.Ltd They Playing Role</h1>
    </div>
    <div className="box">
    <div className='member_card'>
            <img src={img} alt='something went wrong'/>
            <h3> {name} </h3>
            {/* <h4>{Data} </h4> */}
            <p> CEO & Founder </p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Our_members;
