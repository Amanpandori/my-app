import "./Our_Training.css";


function Our_Training(){
    return(
        <div className='training'>
            <h2>Our Training</h2>
            <p>Pg Tech Pvt. Ltd. is a professional company for providing Web education and advanced 6 months & weeks industrial Training company in Chandigarh.</p>
            <div className='training_card'>
            <div className='training_card1'>
                <h2>6 Weeks Course</h2>
                <ul>
                    <li>Core Python</li>
                    <li>C Programming</li>
                    <li>SEO</li>
                    <li>Graphic Designing</li>
                    <li>Web Designing</li>
                    <li>React Js</li>
                    <li>Core java</li>
                    <li>Basic computer</li>

                </ul>
                <button className='btn1 btn'>Know More</button>
            </div>
            <div className='training_card2'>
                <h2>6 Months Course</h2>
                <ul>
                    <li>Web Full Stack Development</li>
                    <li>Java Full Stack Development</li>
                    <li>Python With Artificial Intelligence</li>
                    <li>Python With Machine Learning</li>
                    <li>Python With Data Science</li>
                    <li>MERN / MEAN Stack</li>
                    <li>Digital Marketing Complete</li>
                    

                </ul>
                <button className='btn2 btn'>Know More</button>

            </div>
            </div>
            
        </div>
    )
}

export default Our_Training;

