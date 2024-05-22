
import Header from './Header/Header.js';
import About from './About/About.js';
import Courses from './Courses/Courses.js';
import Our_Training from './Our_Training/Our_Training.js';
import Our_members from './Our_members/Our_members.js';
import Review from './Review/Review.js';
import Location from './Location/Location.js';
import Links from './Links/Links.js';
// import Data from './Our_members/Data.js';
import './App.css';


function App(){
  
  return (
    <div>
    <Header/>
    <About/>
    <Courses/>
    <Our_Training/>
    <Our_members/>
    {/* <Data/> */}
    <Review/>
    <Location/>
    <Links/>
    </div>
  )
}

export default App;