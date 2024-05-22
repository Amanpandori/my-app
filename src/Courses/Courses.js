import "./Courses.css";

function Courses(){
    return(
       <div className='main_courses'>
        <div className='courses'>
        <h4>Our Courses</h4>
        <h3>Your Dreams Our Plans Offered Branches</h3>
        <p>We have a team of professionals who work 24*7 to improve the quality education we are imparting among students. In 6 Months 6 Weeks Industrial training in Chandigarh Our student will work on clients location as well , where they can learn how to understand the exact requirements of clients and how to frame them practically.</p>
        <div className='courses-container'>
            <div className='courses-card'>
                <div className='img1'></div>
                <h6>Computer Science</h6>
                <p>In this course, you will learn complete programming languages like Python With AI, ML, and Data Science, Full stack languages, Web designing and development course, Digital Marketing, Software Testing, and Basic Computer Knowledge skills with Certificate Which will help you to get your dream job.</p>
            </div>
            <div className='courses-card'>
                <div className='img2'></div>
                <h6>Civil</h6>
                <p>In this course, we cover AutoCAD 2D/3D, Revit, STAAD Pro, E-TAB, and 3DS-Max, all of which are essential software tools for architects, engineers, and designers. With our industry-experienced instructors, you'll learn how to effectively use each software, enhancing your productivity and design capabilities.</p>
            </div>
            <div className='courses-card'>
                <div className='img3'></div>
                <h6>Mechanical</h6>
                <p>Our institute provides industry-recognized training in AutoCAD 2D/3D, SolidWorks, CATIA, and CNC Programming, to help you master these software programs and take your career to new heights in the Mechanical field. In addition to providing practical training, which helps students to cover every aspect of the software, our trainers have years of experience in the industry.</p>
            </div>
            <div className='courses-card'>
                <div className='img4'></div>
                <h6>Electronics</h6>
                <p>In these courses, you will learn to work on the latest industry-leading software technologies like Automation, MATLAB, Electrical CAD, Networking, IOT, Robotics, and Embedded Systems. We are fully dedicated to providing you high level of skills through this institute. our work is not only to complete the course but to make you practically job-ready students. Your selection is a matter to us.</p>
            </div>
            
        </div>
       </div>
       </div>
    )
}

export default Courses;