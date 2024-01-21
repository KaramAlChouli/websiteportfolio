import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import emailjs from 'emailjs-com';
import loadingGif from './images/loading.gif';
import checkmarkImage from './images/checkmark.png';
import './css/About.css';
import {FaLinkedin, FaGithub } from 'react-icons/fa';
function About() {
  return (
    <div className="about-container">
          <h2>About Karam</h2>
          <h3>Toronto Metropolitan University</h3>
          <p>Computer Science Third Year</p>
          <ul>
            <p>Enthusiastic and dedicated Computer Science student with a strong passion for coding and technology. Skilled in collaborating effectively in team settings to 
achieve shared goals. Eager to leverage my knowledge and experience in a dynamic 
environment, contributing to impactful projects. Committed to continuous learning 
and growth in the field of computer science. Demonstrates a genuine interest in 
fostering others' understanding and proficiency in coding and technology concepts. </p>

          </ul>

 {/* Social Media Icons */}
 <div className="social-media-icons">
        <a href="https://www.linkedin.com/in/karam-al-chouli-675925233/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/KaramAlChouli" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </div>


      </div>
  );
}

export default About;