import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import '../assets/styles/Footer.css'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/amira-abubakr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/amira-abubakr/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://www.facebook.com/amira.abubakr.badran" target="_blank" rel="noreferrer"><FacebookIcon/></a>
        <a href="https://www.instagram.com/your_username" target="_blank" rel="noreferrer"><InstagramIcon/></a>

      </div>
      <p>A portfolio designed & built by <a href="https://github.com/amira-abubakr/my-react-portfolio?tab=readme-ov-file" target="_blank" rel="noreferrer">Amira Abubakr</a> </p>
    </footer>
  );
}

export default Footer;