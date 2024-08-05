import React from "react";
import "./ContactPage.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import data from "../../data/contactInfo.json";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <section data-testid="contact-section" id="contact">
      <h1 data-testid="contact-section-header" className="section-header">
        Contact
      </h1>
      <a href={data.contactInfo.githubLink} target="_blank" rel="noreferrer">
        <FaGithub className="icon" size={40} color="#000" />
      </a>
      <a href={data.contactInfo.linkedInLink} target="_blank" rel="noreferrer">
        <FaLinkedin className="icon" size={40} color="#000" />
      </a>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
