import React, { useRef, useState } from "react";
import "../assets/styles/Contact.css";
import emailjs from "emailjs-com";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { toast, ToastContainer } from "react-toastify";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    if (name && email && message) {
      emailjs
        .sendForm(
          "service_5on2vnf",
          "template_w6yphpd",
          form.current!,
          "RKcTYVks6vGpk-n2j"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("✅ تم إرسال الرسالة بنجاح!");
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
            toast.error("❌ حصلت مشكلة أثناء الإرسال، جربي تاني.");
          }
        );
    }
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
            component="form"
            ref={form}
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                name="name"
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
               className="body-form"
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
               />
              <TextField
                name="email"
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              className="body-form"
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
              />
            </div>
            <TextField
            
              required
              multiline
              rows={10}
              name="message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
      
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
          <ToastContainer position="bottom-center" autoClose={3000} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
