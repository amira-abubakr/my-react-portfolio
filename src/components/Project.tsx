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

const projects = [
  {
    img: project1,
    title: "React Portfolio",
    url: "https://portfolio-amera-abubakrs-projects.vercel.app/",
    desc: "A showcase of my work as a Frontend Developer, focused on building responsive and user-friendly interfaces with clean design and smooth user experience.",
  },
  {
    img: project2,
    title: "Admin Dashboard",
    url: "https://admin-dashboard-six-tau-86.vercel.app/",
    desc: "An admin dashboard to manage members, publish news, and control content access across a political party's digital ecosystem.",
  },
  {
    img: project3,
    title: "Real Estate Project",
    url: "https://real-estate-ecru-nu.vercel.app/home",
    desc: "A responsive real estate platform supporting unit search, filtering, and multilingual support to enhance property discovery.",
  },
  {
    img: project4,
    title: "Waffy Project",
    url: "https://waffy.vercel.app/",
    desc: "A full-stack marketplace application enabling real-time product listings, buyer-seller messaging, and seamless checkout flows.",
  },
  {
    img: project5,
    title: "Plan B Platform",
    url: "https://planb-client.vercel.app/",
    desc: "A subscription-based system with dynamic user roles, plan creation, and JWT-based authentication and access control.",
  },
  {
    img: project6,
    title: "Alsakr Group",
    url: "/",
    desc: "A web platform for showcasing and selling fresh fruits and vegetables in an organized, user-friendly way.",
  },
];

function Project() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project"
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-delay={String((index % 2) * 100)}
            data-aos-easing="ease-out-cubic"
          >
            {/* Image */}
            <a href={project.url} target="_blank" rel="noreferrer">
              <div className="project-image-wrapper">
                <img
                  src={project.img}
                  className="zoom"
                  alt={project.title}
                  width="100%"
                />
              </div>
            </a>

            {/* Card info */}
            <div className="project-info">
              <a href={project.url} target="_blank" rel="noreferrer">
                <h2>{project.title}</h2>
              </a>
              <p>{project.desc}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="project-link-row"
              >
                View Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
