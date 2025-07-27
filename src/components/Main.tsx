import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import { motion } from 'framer-motion';

import "../assets/styles/Main.css";



function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        
        </div>
        <div className="content">
        
         <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  Amira Abubakr
</motion.h1>
          <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
>
  Front End Developer
</motion.p>
            <motion.div
                  initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}

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
          </motion.div>

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
