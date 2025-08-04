import React, { useEffect } from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faBriefcase,
  faLaptopCode,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Timeline() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id="history">
      <div className="items-container">
        <h1 style={{ marginBottom: "90px" }}>Career History</h1>
        <div
          style={{ marginBottom: "60px" }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#000000ff ",
              color: "white",
              border: "1px solid #00FFF7",
              boxShadow: "0 0 10px #00FFF7",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #00FFF7" }}
            date="Jul 2024 - Sept 2024"
            iconStyle={{
              background: "linear-gradient(135deg, #00FFF7, #111111ff)", // تدرج نيون
              color: "#000", // لون داخلي واضح
              borderRadius: "50%",
              boxShadow: "0 0 15px #00FFF7",
            }}
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
          >
            <h3 className="vertical-timeline-element-title">
              {" "}
              Frontend Developer Intern{" "}
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              ITI - Information Technology Institute
            </h4>

            <p>
              Built responsive websites for clients using modern web
              technologies, Collaborated with clients to translate their ideas
              into functional UI,
              <br />
              Handled full frontend workflow from design to deployment
            </p>
          </VerticalTimelineElement>
        </div>
        <div
          style={{ marginBottom: "60px" }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
         
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - now"
            contentStyle={{
              background: "#000000ff ",
              color: "white",
              border: "1px solid #00FFF7",
              boxShadow: "0 0 10px #00FFF7",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #00FFF7" }}
            iconStyle={{
              background: "linear-gradient(135deg, #00FFF7, #111111ff)", // تدرج نيون
              color: "#000", // لون داخلي واضح
              borderRadius: "50%",
              boxShadow: "0 0 15px #00FFF7",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Freelance Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              Built responsive web pages using HTML, CSS, and JavaScript,
              Developed interactive components with React,
              <br />
              Worked collaboratively on team projects using Git and GitHub
            </p>
          </VerticalTimelineElement>
        </div>
        <div
          style={{ marginBottom: "60px" }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - now"
            contentStyle={{
              background: "#000000ff ",
              color: "white",
              border: "1px solid #00FFF7",
              boxShadow: "0 0 10px #00FFF7",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #00FFF7" }}
            iconStyle={{
              background: "linear-gradient(135deg, #00FFF7, #111111ff)", // تدرج نيون
              color: "#000", // لون داخلي واضح
              borderRadius: "50%",
              boxShadow: "0 0 15px #00FFF7",
            }}
            icon={<FontAwesomeIcon icon={faBookOpen} />}
          >
            <h3 className="vertical-timeline-element-title">
              Currently Learning Next.js
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Self-Paced</h4>
            <p>
              Exploring advanced concepts in server-side rendering and static
              site generation, Building hands-on projects to strengthen
              understanding of the framework
            </p>
          </VerticalTimelineElement>
        </div>
        <div
          className=""
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2025 -  Sept 2025"
            contentStyle={{
              background: "#000000ff",
              color: "white",
              border: "1px solid #00FFF7",
              boxShadow: "0 0 10px #00FFF7",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #00FFF7" }}
            iconStyle={{
              background: "linear-gradient(135deg, #00FFF7, #111111ff)", // تدرج نيون
              color: "#000", // لون داخلي واضح
              borderRadius: "50%",
              boxShadow: "0 0 15px #00FFF7",
            }}
            icon={<FontAwesomeIcon icon={faPenNib} />}
          >
            <h3 className="vertical-timeline-element-title">
              UI/UX Design Trainee
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              ITI – Information Technology Institute
            </h4>
            <p>
              Learning design principles, color theory, and visual hierarchy,
              Practicing wireframing, prototyping, and user research
              fundamentals,
              <br />
              Enhancing my ability to design user-centered interfaces
            </p>
          </VerticalTimelineElement>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
