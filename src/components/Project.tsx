import React, { useEffect } from "react";

import project6 from "../assets/images/project6.jpg";
import project5 from "../assets/images/project5.jpg";
import project4 from "../assets/images/project4.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project1 from "../assets/images/project1.jpg";
import "../assets/styles/Project.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div
          className="project"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <a
            href="https://portfolio-amera-abubakrs-projects.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project1} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://portfolio-amera-abubakrs-projects.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>React Portfolio</h2>
          </a>
          <p>
            A showcase of my work as a Frontend Developer, focused on building
            responsive and user-friendly interfaces with clean design and smooth
            user experience.
          </p>
        </div>
        <div
          className="project"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <a
            href="https://admin-dashboard-six-tau-86.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project2} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://admin-dashboard-six-tau-86.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Admin Dashboard</h2>
          </a>
          <p>
            {" "}
            An admin dashboard to manage members, publish news, and control
            content access across a political party’s digital ecosystem.
          </p>
        </div>
        <div
          className="project"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <a
            href="https://real-estate-ecru-nu.vercel.app/home"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project3} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://real-estate-ecru-nu.vercel.app/home"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Real Estate Project</h2>
          </a>
          <p>
            {" "}
            A responsive real estate platform supporting unit search, filtering,
            and multilingual support to enhance property discovery.
          </p>
        </div>
        <div
          className="project"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <a href="https://waffy.vercel.app/" target="_blank" rel="noreferrer">
            <img src={project4} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://waffy.vercel.app/" target="_blank" rel="noreferrer">
            <h2>Waffy Project </h2>
          </a>
          <p>
            {" "}
            A full-stack marketplace application enabling real-time product
            listings, buyer-seller messaging,and seamless checkout flows.
          </p>
        </div>
        <div
          className="project"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <a
            href="https://planb-client.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project5} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://planb-client.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2> Plan B Platform </h2>
          </a>
          <p>
            {" "}
            A subscription-based system with dynamic user roles, plan creation,
            and JWT-based authentication and access control.
          </p>
        </div>
        <div
          className="project"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <a href="/" target="_blank" rel="noreferrer">
            <img src={project6} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="//" target="_blank" rel="noreferrer">
            <h2> Alsakr Group</h2>
          </a>
          <p>
            {" "}
            A web platform for showcasing and selling fresh fruits and
            vegetables in an organized, user-friendly way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
