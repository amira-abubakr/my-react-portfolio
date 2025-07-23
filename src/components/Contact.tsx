import React, { useRef, useState } from "react";
import "../assets/styles/Contact.css";
// import emailjs from '@emailjs/browser';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();
  const [state, handleSubmit] = useForm("xnnzpqek");

  if (state.succeeded) {
    return <h2>Thanks for joining!</h2>;
  }

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");
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
          <Box
            onSubmit={handleSubmit}
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
            <TextField
  name="name"
  required
  id="outlined-required"
  label="Your Name"
  placeholder="What's your name?"
  value={name}
  onChange={(e) => {
    setName(e.target.value);
  }}
  error={nameError}
  helperText={nameError ? "Please enter your name" : ""}
  sx={{
    input: {
      color: 'red', // غيري اللون اللي يعجبك
    },
  }}
/>

              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <TextField
                name="email"
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              name="message"
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button
              type="submit"
              disabled={state.submitting}
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
