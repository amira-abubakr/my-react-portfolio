import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typewriter } from 'react-simple-typewriter';

import "../assets/styles/Main.css";
import ScrollToTopButton from "./Arrow";




function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        
        </div>
        <div className="content">
        
     <h1 style={{color:'#00FFF7'}}>
            <Typewriter
              words={['Amira Abubakr..']}
              loop={1}
              
                cursor={false}
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </h1>
          
  <p>Front-End Developer.</p>


            <div
           
             className="social_icons">
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
              href="https://www.facebook.com/amira.abubakr.badran"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/am_bakr7?igsh=MTZjbmFheXhjZ3hz"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>

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
              href="https://www.facebook.com/amira.abubakr.badran"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/am_bakr7?igsh=MTZjbmFheXhjZ3hz"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
      <ScrollToTopButton />

    </div>
    
  );
}

export default Main;
