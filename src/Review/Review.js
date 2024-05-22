

import "./Review.css";

const Review = () => {
  return (
    <div className='main_container'>
      <h2>What <span>Students</span> Said <span>About</span> Us</h2>
      <div className='reviews'>
        <div className='review'>
          <p>I can confidently say that the Pg Tech Pvt. Ltd. Institute offers exceptional resources and training for anyone interested in mastering this powerful programming language python.</p>
          <div className='image'>
            <img src="https://pgtechsolutions.com/wp-content/uploads/2023/06/Rest-Employee-1.webp" alt="rajni" />
            <h6>Rajni Chawla</h6>
            <p>Python</p>
          </div>
        </div>
        <div className='review'>
          <p>I was impressed with the quality of the curriculum. The trainers covered a wide range of topics including HTML, CSS, JavaScript, PHP, and MySQL, among others. They provided detailed explanations of each concept and gave practical examples that made it easy to understand and apply the knowledge.</p>
          <div className='image'>
            <img src="https://pgtechsolutions.com/wp-content/uploads/2023/06/Rest-Employee-2.webp" alt="Abhishek Yadav" />
            <h6>Abhishek Yadav</h6>
            <p>Full Stack Developer</p>
          </div>
        </div>
        <div className='review'>
          <p>Trainer is highly knowledgeable, and the course material was comprehensive and up-to-date. The practical exercises and real-life case studies helped me understand how to apply the various digital marketing techniques in a real-world scenario.</p>
          <div className='image'>
            <img src='https://pgtechsolutions.com/wp-content/uploads/2023/06/rajeev-Sharma-Digital-Marketer-Pg-Tech-pvt.-Ltd..webp' alt="Rajeev Sharma" />
            <h6>Rajeev Sharma</h6>
            <p>Digital Marketing</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review;
