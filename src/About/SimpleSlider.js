import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://pgtechsolutions.com/wp-content/uploads/2023/05/1-new.webp" alt="something went wrong"/>
      </div>
      <div>
        <img src="https://pgtechsolutions.com/wp-content/uploads/2023/05/2-new.webp" alt="something went wrong"/>
      </div>
      <div>
        <img src="https://pgtechsolutions.com/wp-content/uploads/2023/05/3-new.webp" alt="something went wrong"/>
      </div>
      <div>
        <img src="https://pgtechsolutions.com/wp-content/uploads/2023/05/4-new.webp" alt="something went wrong"/>
      </div>
    </Slider>
  );
}