import React, { useEffect, useState } from "react";
import "./ProfileBanner.css";
import PlayButton from "../components/PlayButton";
import MoreInfoButton from "../components/MoreInfoButton";
import { ProfileBanner as ProfileBannerType } from "../types";

const ProfileBanner: React.FC = () => {
  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await getPro fileBanner();
  //     setBannerData(data);
  //   }
  //   fetchData();
  // }, []);

  // if (!bannerData) return <div>Loading...</div>;

  const handlePlayClick = () => {
    window.open("/Resume.pdf", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/yatharth-agarwal-666787255/",
      "_blank"
    );
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          Yatharth Agarwal
        </h1>
        <p className="banner-description">
          A results-driven Full Stack Developer with 1 year of hands-on
          experience in building dynamic, user-centric web applications using
          modern technologies like React.js, Angular, Express.js, and SQL-based
          databases. Skilled in both frontend and backend development, with a
          strong grasp of RESTful API design, scalable architectures, and
          responsive UI/UX principles. Adept at working across the full
          development lifecycle — from ideation and prototyping to deployment
          and optimization. I flourish in environments where innovation,
          collaboration, and performance matter. I’ve contributed to diverse
          projects including workout tracking platforms, e-commerce fashion
          portals, and real-time reservation systems. With a passion for
          crafting seamless user experiences and writing clean, maintainable
          code, I continuously strive to bridge design and functionality. Known
          for adaptability, ownership, and a problem-solving mindset, I bring a
          strong foundation in JavaScript, TypeScript, and cloud deployment
          (Vercel, Railway, AWS) while staying open to emerging technologies
          like AI integrations. Eager to take on challenges that push the
          boundaries of what's possible in web development.
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
