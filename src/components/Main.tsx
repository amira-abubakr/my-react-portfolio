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

          {/* Availability badge */}
          <div className="hero-badge">
            <span className="dot"></span>
            Available for work
          </div>

          <h1>
            <Typewriter
              words={['Amira Abubakr.']}
              loop={1}
              cursor={false}
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </h1>

          <p>Front-End Developer</p>

          {/* Desktop social icons */}
          <div className="social_icons">
            <a
              href="https://github.com/amira-abubakr"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/amira-abubakr/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.facebook.com/amira.abubakr.badran"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/am_bakr7?igsh=MTZjbmFheXhjZ3hz"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>

          {/* Mobile social icons */}
          <div className="mobile_social_icons">
            <a
              href="https://github.com/amira-abubakr"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/amira-abubakr/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.facebook.com/amira.abubakr.badran"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/am_bakr7?igsh=MTZjbmFheXhjZ3hz"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
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
