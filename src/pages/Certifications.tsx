import React, { useEffect, useState } from "react";
import "./Certifications.css";
import { FaExternalLinkAlt, FaUniversity } from "react-icons/fa";
import { SiUdemy, SiCoursera, SiIeee } from "react-icons/si";
import { Certification } from "../types";
import { getCertifications } from "../queries/getCertifications";
const iconData: { [key: string]: JSX.Element } = {
  udemy: <SiUdemy />,
  coursera: <SiCoursera />,
  ieee: <SiIeee />,
  university: <FaUniversity />,
};

const Certifications: React.FC = () => {
  // const [certifications, setCertifications] = useState<Certification[]>([]);
  const certifications: Certification[] = [
    {
      title: "Foundations of Digital Marketing and E-commerce",
      issuer: "Google",
      issuedDate: "May 13, 2023",
      link: "https://coursera.org/share/7ff9e1b6066d277badc210222c7daeff",
      iconName: "coursera",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      issuedDate: "April 10, 2023",
      link: "https://coursera.org/share/f878671feb4bb9f625f2afde9d653871",
      iconName: "coursera",
    },
    {
      title: "Software Engineering: Software Design and Project Management",
      issuer: "The Hong Kong University of Science and Technology",
      issuedDate: "March 10, 2023",
      link: "https://coursera.org/share/576098b89f28a32457e05eb63b3d71bc",
      iconName: "coursera",
    },
    {
      title: "Fundamentals of Network Communication",
      issuer: "University of Colorado System",
      issuedDate: "April 10, 2023",
      link: "https://coursera.org/share/a95019d5db7f14ad3286df0f1bb32349",
      iconName: "coursera",
    },
    {
      title: "Introduction to Intellectual Property",
      issuer: "University of Pennsylvania",
      issuedDate: "April 10, 2023",
      link: "https://coursera.org/share/44bbb5a4ebbbfe9a5cd4710f76c64152",
      iconName: "coursera",
    },
    {
      title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
      issuer: "Udemy",
      issuedDate: "May 20, 2025",
      link: "https://www.udemy.com/certificate/UC-2b1cdf26-f40a-46db-9a4b-c309667b7d7b/",
      iconName: "udemy",
    },
  ];

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a
            href={cert.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
            style={{ "--delay": `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="certification-content">
              <div className="certification-icon">
                {iconData[cert.iconName] || <FaUniversity />}
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && (
                <span className="issued-date">Issued {cert.issuedDate}</span>
              )}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
