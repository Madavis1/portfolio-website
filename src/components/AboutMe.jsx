import "../css/AboutMe.css";
import Profile from '../assets/stock-user.jpg'
import LinkedIn from '../assets/linkedin.svg'

const AboutMe = () => {
  return (
    <div className="page">
      <div className="box">
        <div className="inner">
          <img src={Profile} alt="Picture of Matthew Davis" />
          <h1>Matthew Davis</h1>
          <h2>Junior Software Developer</h2>
          <h3>📍 Warwickshire, England</h3>
          <div className="socials">
            <a href="https://www.linkedin.com/in/your-linkedin-profile/">

            </a>
            <button>Github</button>
            <button>Email</button>
          </div>
          <button>Download CV</button>
        </div>
      </div>
      <div className="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default AboutMe;
