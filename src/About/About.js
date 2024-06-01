import "./About.css";import
 React from "react";
import SimpleSlider from "./SimpleSlider";

function About(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <main>
            <div className='about'>
                <p>WHO <span>WE</span> ARE</p>
                <h2>Prerna Gati Technology Pvt. Ltd.</h2>
                <p>We found that due to less availability of awareness in the technical field student does not show their interest to learn technical skills like programming and Digital marketing skills. We have started the initiative to encourage students to join technical fields and high-salary jobs by providing them with training, and guidance and explaining their future scope. Here at Pg Tech Pvt. Ltd., we are providing training in various fields like front-end developer & back-end developer courses, mechanical and civil software training courses, and basic computer courses along with job placement in Chandigarh & Mohali. we train every student from beginners level and make them at the advanced level under our expert guidance. If you are looking for the best C  & C++ training institutes near me then you should visit our coaching institute and attend free demo classes to decide better.  </p>
                <p>Through our experience we understand child learning nature, every child has their own unique learning interest we should not force them to learn anything against their wish but yes we are telling them every possibility where they can improve themselves, what things they should follow to earn good salary packages, all this we tell them during the free demo session. we have also designed basic computer courses that will help them to get jobs in any sector because we know today the Indian government changing India completely digitally. Like the education sector changes digitally, business, payment everything. so we provide training in Microsoft Word and Excel courses, fast computer typing courses with certifications, etc.  To know more kindly visit our technical institute in Chandigarh or you can call us.</p>
            </div>
            <div className='pictures'>
            <SimpleSlider/>
            </div>
        </main>
    
    )
}

export default About;