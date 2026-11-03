import React, { useState, useRef, useEffect } from "react";
import Button from "../button/Button";
import { validateEmail, validateSubject } from "../../utils/validation";
import "./contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!validateSubject(subject)) {
      setError("Subject must be longer than 8 characters.");
      return;
    }
    setError("");
    alert("Message sent successfully!");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {error && <span className="error-text">{error}</span>}
        <Button type="submit" style={{ backgroundColor: "#007bff" }}>
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
