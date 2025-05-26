import React, { useEffect, useState } from "react";
import "./Projects.css";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaDocker,
  FaAngular,
  FaGithub,
  FaGitlab,
  FaGoogle,
  FaJava,
  FaJenkins,
  FaMicrosoft,
  FaHtml5,
  FaPython,
  FaVuejs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiRubyonrails,
  SiPostgresql,
  SiMongodb,
  SiMaterialdesign,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiAwsamplify,
  SiFirebase,
  SiTerraform,
  SiArgo,
} from "react-icons/si";
import { Project } from "../types";
import { GrDeploy, GrKubernetes } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";

const techIcons: { [key: string]: JSX.Element } = {
  ReactJS: <FaReact />,
  JavaScript: <IoLogoJavascript />,
  TailwindCSS: <RiTailwindCssFill />,
  NodeJS: <FaNodeJs />,
  AWS: <FaAws />,
  PostgreSQL: <SiPostgresql />,
  "React Native": <TbBrandReactNative />,
  MongoDB: <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  HTML5: <FaHtml5 />,
  CSS3: <SiCss3 />,
  jQuery: <SiJquery />,
  Vercel: <IoLogoVercel />,
  "AWS-ECS": <SiAwsamplify />,
  Cognito: <FaAws />,
  Lambda: <FaAws />,
  ECS: <FaAws />,
  Jenkins: <FaJenkins />,
  Docker: <FaDocker />,
  GraphQL: <FaDatabase />,
  "CI/CD": <FaGitlab />,
  GitLab: <FaGitlab />,
  GitHub: <FaGithub />,
  Heroku: <GrDeploy />,
  Netlify: <GrDeploy />,
  Firebase: <SiFirebase />,
  GCP: <FaGoogle />,
  Azure: <FaMicrosoft />,
  Kubernetes: <GrKubernetes />,
  Terraform: <SiTerraform />,
  ArgoCD: <SiArgo />,
  Java: <FaJava />,
  "Spring Boot": <FaJava />,
  Python: <FaPython />,
  "Node.js": <FaNodeJs />,
  "Express.js": <FaNodeJs />,
  Hibernate: <FaJava />,
  Maven: <FaJava />,
  Gradle: <FaJava />,
  JUnit: <FaJava />,
  Mockito: <FaJava />,
  Jest: <FaReact />,
  React: <FaReact />,
  Angular: <FaAngular />,
  "Vue.js": <FaVuejs />,
  "Next.js": <FaReact />,
  Gatsby: <FaReact />,
  "Nuxt.js": <FaVuejs />,
  Redux: <FaReact />,
  Vuex: <FaVuejs />,
  "Tailwind CSS": <SiCss3 />,
  Bootstrap: <SiCss3 />,
  JQuery: <SiJquery />,
};
interface ProjectCard {
  title: string;
  description: string;
  techUsed: string;
  image: string;
  url: string;
}

const Projects: React.FC = () => {
  const projects: ProjectCard[] = [
    {
      title: "Dice Duel",
      description:
        "A dice game where you can play against the computer or against a friend.",
      techUsed: "React,JavaScript,HTML5,TailwindCSS,Netlify",
      image: "/dicegame.png",
      url: "diceduel1v1.netlify.app",
    },
    {
      title: "Mini Portfolio",
      description: "A mini portfolio that I made for myself.",
      techUsed: "React,JavaScript,HTML5,TailwindCSS,Netlify",
      image: "/portfolio.png",
      url: "https://yatharth-agarwal.netlify.app/",
    },
    {
      title: "Spotify Mood",
      description:
        "An exact Spotify clone made using spotify developer api and spotify web player api.",
      techUsed: "React,Vercel,JavaScript,HTML5,TailwindCSS",
      image: "/spotify.png",
      url: "spotify-mood.vercel.app",
    },
    {
      title: "Money Splitter",
      description:
        "A money splitter app where you can split the bill with your friends.",
      techUsed: "React,JavaScript,HTML5,TailwindCSS,Netlify",
      image: "/moneySplit.png",
      url: "money-splitting-app.vercel.app",
    },
    {
      title: "Train Coach Reservation",
      description:
        "A train coach reservation app where you can search for a train and see the available coaches.",
      techUsed: "React,JavaScript,HTML5,TailwindCSS,Netlify",
      image: "/railway.png",
      url: "https://newproj-mauve.vercel.app/",
    },
    {
      title: "Reel Segment",
      description:
        "A reels app where you can upload and scroll reels uploaded by you and your friends.",
      techUsed:
        "React,Typescript,HTML5,TailwindCSS,Express.js,PostgreSQL,NodeJS",
      image: "/reels.png",
      url: "https://github.com/yatharth-7022/reel-segment",
    },
    {
      title: "Workout Tracker",
      description:
        "A workout tracker app where you can track your workouts and see your progress.",
      techUsed:
        "React Native,Typescript,TailwindCSS,Expo,Express.js,Expo-router,PostgreSQL,NodeJS",
      image: "/app.jpeg",
      url: "https://github.com/yatharth-7022/Bodywise-Fitness-Tracker-Native",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            onClick={() => {
              const url = project.url.startsWith("http")
                ? project.url
                : `https://${project.url}`;
              window.open(url, "_blank");
            }}
            key={index}
            className="project-card"
            style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(",").map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
