import "./styles/about.css"
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";



function About() {
  return (
    <div className="about">
      <div className="about_content">
        <div className="about_me">
          <h1>About Me</h1>
          <p>Hi there! I'm a passionate web development student, eager to learn and grow in the world of technology.</p>
          <p>This project is part of my journey to improve web development skills. Through building this To-Do List application, I'm learning the fundamentals of React.js.</p>
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <h4>Abishek K</h4>
          <div className="icon">
            <div className="mail">
              <IoIosMail size={30}/>
              <p>abishek.sty@gmail.com</p>
            </div>
            <div className="mail">
              <FaLinkedin size={25}/>
              <a href="https://www.linkedin.com/in/abishek-k-19a2a130b/">Abishek</a>
            </div>
           
          </div>
          
          
        </div>
        <p></p>
      </div>
    </div>
  );
}

export default About;