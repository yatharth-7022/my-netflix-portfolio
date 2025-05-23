import React, { useEffect, useState } from "react";
import "./Skills.css";
import { getSkills } from "../queries/getSkills";

import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import {
  SiRubyonrails,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiKubernetes,
  SiGooglecloud,
  SiSpringboot,
  SiPhp,
  SiNetlify,
  SiHeroku,
  SiHtml5,
  SiCss3,
  SiRabbitmq,
  SiImessage,
} from "react-icons/si";
import { Skill } from "../types";
import { skillsData } from "../data";

const Skills: React.FC = () => {
  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Define the order of categories
  const categoryOrder = [
    "Frontend",
    "Backend",
    "Databases",
    "Languages",
    "Cloud & DevOps",
    "Other Tools & Practices",
  ];

  return (
    <div className="skills-container">
      {categoryOrder.map(
        (category, index) =>
          skillsByCategory[category] && (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skillsByCategory[category].map((skill: any, idx: number) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={idx} className="skill-card">
                      <div className="icon">
                        <IconComponent />
                      </div>
                      <h3 className="skill-name">
                        {skill.name.split("").map((letter: any, i: number) => (
                          <span
                            key={i}
                            className="letter"
                            style={{ animationDelay: `${i * 0.05}s` }}
                          >
                            {letter}
                          </span>
                        ))}
                      </h3>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Skills;
