import React, { useEffect, useState } from "react";
import "./ContactMe.css";
import profilePic from "../images/sumanth.jpeg";
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from "react-icons/fa";
import { ContactMe as IContactMe } from "../types";
import { getContactMe } from "../queries/getContactMe";
interface UserProfile {
  name: string;
  title: string;
  companyUniversity: string;
  email: string;
  phoneNumber: string;
  linkedinLink: string;
  summary: string;
}

const userData: UserProfile = {
  name: "Yatharth Agarwal",
  title: "Software Developer",
  companyUniversity: "GoTrust | Bennett University",
  email: "yatharth7022@gmail.com",
  phoneNumber: "+91 7082287214",
  summary:
    "With strong experience in building responsive and dynamic user interfaces using React, Angular, JavaScript, TypeScript, and Tailwind CSS. Skilled in creating modern, accessible, and user-friendly web apps.",
  linkedinLink: "https://www.linkedin.com/in/yatharth-agarwal-666787255/",
};
const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src="/me.jpeg" alt="Yatharth Agarwal" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData?.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">{userData.summary}</p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
