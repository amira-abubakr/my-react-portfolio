import React, { useState } from "react";
import "../assets/styles/Contact.css";

import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("meraabadran3@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>

          <div className="email-box">
            <div className="email-text">
              <span>meraabadran@gmail.com</span>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                open={showTooltip}
                onClose={() => setShowTooltip(false)}
                title="Copied!"
                TransitionComponent={Zoom}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                placement="bottom"
              >
                <IconButton onClick={copyToClipboard}>
                  <FontAwesomeIcon icon={faCopy}  style={{ cursor: "pointer", color: "#fff" }} />

                </IconButton>
              </Tooltip>
            </div>

            <a
              className="btn PrimaryBtn btn-shadow resume"
              href="mailto:meraabadran3@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
