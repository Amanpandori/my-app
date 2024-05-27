import React from 'react'
import Data from './Data.js';
import Our_members from './Our_members.js';
// import Image from './Image.js'
function Body() {
  return (
    <div>
         <div className="container">
        {Data.map((value, index) => {
          return (
            <Our_members
              name={value.name}
              img={value.img}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Body;