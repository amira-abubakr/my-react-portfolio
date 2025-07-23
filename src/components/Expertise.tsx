import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.css';
import { faBorderAll, faGlobe, faPencilRuler, faPlug } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "Material-UI",

];

const labelsSecond = [
    "CSS",
    "Grid system",
    "Figma",
    "flexbox",
    "Responsive Design",
    "bootstrap",
    "tailwindcss",
   
];

const labelsThird = [
  "REST APIs",
  "Axios & Fetch",
  "Firebase ",
  "i18next",


];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Front-end Development</h3>
                    <p>I craft clean, responsive, and user-friendly web interfaces, focusing on smooth interactions and consistent experiences across all devices.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBorderAll} size="3x"/>
                    <h3>UI Development</h3>
                    <p>I translate visual designs into clean, accurate interfaces with a strong focus on layout, spacing, and visual consistency.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGlobe} size="3x"/>
                    <h3>API & Integration</h3>
                    <p>I integrate data into the front end to create smooth, dynamic, and interactive user experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;