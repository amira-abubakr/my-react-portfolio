import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import "../assets/styles/Main.css";



function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        
        </div>
        <div className="content">
          <div className="social_icons"> 
            <a
              href="https://github.com/amira-abubakr"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/amira-abubakr/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
       
            <a
              href="https://www.facebook.com/your_username"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/your_username"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
          <h1>Amira Abubakr</h1>
          <p>Front End Developer</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/amira-abubakr"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/amira-abubakr/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          
            <a
              href="https://www.facebook.com/your_username"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/your_username"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
