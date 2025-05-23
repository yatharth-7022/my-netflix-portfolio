import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from '../src/images/logo-2.png'; // Update with the path to your logo

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.error("Audio play error:", error));
    setIsClicked(true); 
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 2000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [animate, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <img
        className={`netflix-logo${animate ? ' animate' : ''}`}
        src={logoImage}
        alt="Custom Logo"
      />
    </div>
  );
};

export default NetflixTitle;
