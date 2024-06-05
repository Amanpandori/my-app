import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './Slider.css'

import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const sliderImages = [
  {
    url: 'https://pgtechsolutions.com/wp-content/uploads/2023/05/3-new.webp'
  },
  {
    url: 'https://pgtechsolutions.com/wp-content/uploads/2023/05/4-new.webp'
  },
  {
    url: 'https://pgtechsolutions.com/wp-content/uploads/2023/05/1-new.webp'
  },
];


const divStyle = {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'center',
  height: '400px',
  background: 'cover'
}


export default function SimpleSlider() {
  
  return(
    <div className="slide-container">
        <Fade>
          {sliderImages.map((image, index) =>(
            <div key={index}>
              <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>


              </div>
            </div>
          ))}
        </Fade>
    </div>
  )
}


// import React from 'react';
// import { Fade } from 'react-slideshow-image';

// const images = [
//   'https://pgtechsolutions.com/wp-content/uploads/2023/05/1-new.webp',
//   'https://pgtechsolutions.com/wp-content/uploads/2023/05/2-new.webp',
//   'https://pgtechsolutions.com/wp-content/uploads/2023/05/4-new.webp',
// ];

// const SimpleSlider = () => {
//   return (
//     <div className="slideshow">
//       <Fade>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img src={image} alt={image} />
//           </div>
//         ))}
//       </Fade>
      
//     </div>
//   );    
// };

// export default SimpleSlider;


