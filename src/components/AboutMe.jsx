import "../css/AboutMe.css";
import Profile from "../assets/stock-user.jpg";
import LinkedIn from "../assets/linkedin.svg";

const AboutMe = () => {
  return (
    <div className="page">
      <div className="box">
        <div className="inner">
          <div className="left">
            <img src={Profile} alt="Picture of Matthew Davis" />
            <h1>Matthew Davis</h1>
            <h2>Junior Software Developer</h2>
            <h3>📍 Warwickshire, England</h3>
            <div className="socials">
              <a
                className="social"
                href="https://www.linkedin.com/in/matthew-davis-279a8a240/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"
                    fill="var(--text-muted)"
                  />
                </svg>
              </a>
              <a
                className="social"
                href="https://github.com/Madavis1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.813 1.102.813 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"
                    fill="var(--text-muted)"
                  />
                </svg>
              </a>
              <a
                className="social"
                href="mailto:madavis120@gmail.com"
                aria-label="Email"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"
                    fill="var(--text-muted)"
                  />
                </svg>
              </a>
            </div>
            <a 
              className="download"
              href="../assets/CV Main.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginTop: "1rem",
                textDecoration: "none"
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                style={{ marginRight: "0.5rem" }}
                aria-hidden="true"
              >
                <path
                  d="M12 16V4M12 16l-4-4M12 16l4-4M4 20h16"
                  stroke="var(--text-muted)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download CV
            </a>
          </div>
          <div className="right"></div>
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
