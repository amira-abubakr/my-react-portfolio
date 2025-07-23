import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBriefcase, faLaptopCode, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.css'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jul 2024 - Sept 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
          >
            <h3 className="vertical-timeline-element-title"> Frontend Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">ITI - Information Technology Institute</h4>
            <p>
             Built responsive websites for clients using modern web technologies,<br/>
            Collaborated with clients to translate their ideas into functional UI,<br/>
            Handled full frontend workflow from design to deployment
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - now"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Frontend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              Built responsive web pages using HTML, CSS, and JavaScript,<br/>
              Developed interactive components with React,<br/>
              Worked collaboratively on team projects using Git and GitHub
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - now"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBookOpen} />}
          >
            <h3 className="vertical-timeline-element-title">Currently Learning Next.js</h3>
            <h4 className="vertical-timeline-element-subtitle">Self-Paced</h4>
            <p>
              Exploring advanced concepts in server-side rendering and static site generation,<br/>
              Building hands-on projects to strengthen understanding of the framework
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2025 -  Sept 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faPenNib} />}
          >
            <h3 className="vertical-timeline-element-title">UI/UX Design Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">ITI – Information Technology Institute</h4>
            <p>
                Learning design principles, color theory, and visual hierarchy,<br/>
                Practicing wireframing, prototyping, and user research fundamentals,<br/>
                Enhancing my ability to design user-centered interfaces
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;