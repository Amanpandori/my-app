import React from 'react'
import './Our_members.css'
import Data from './Data'

const Image = ({img,name}) => {
  return (
      <div className='member_card'>
         {Data.map((value) => {
          return (
            <Image
              name={value.name}
              img={value.img}
            />
          );
        })}
            </div>
  )
}

export default Image;
