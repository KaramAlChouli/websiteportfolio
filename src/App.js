import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/App.css';
import Header from './Header';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';
import Particles from 'particles.js';
import profilePic from './images/image.png';

function Home() {
  useEffect(() => {
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 20,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#34e0ad"
          
        },
        size: {
          value: 50,
          random: true
        },
        // ... other particle settings
      },
      interactivity: {
        detect_on: "window", // or 'canvas'
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          // other events like onclick
        },
        modes: {
          repulse: {
            distance: 270,
            duration: 5
          },
          // other modes like bubble, push, etc.
        }
      }
      ,
      // ... other config options
    });
  }, []);
  return (
    <div className="home-container">
      <div id="particles-js" className="particles-container"></div>
      <div className="home-content">
        <div className="intro-text">
          <h1 className="bouncing-text">Karam Al-Chouli</h1>
          <h1 className="bouncing-text">Karam Al-Chouli</h1>
          <h1 className="bouncing-text">Karam Al-Chouli</h1>
          <h1 className="bouncing-text">Karam Al-Chouli</h1>
          <h1 className="bouncing-text">Karam Al-Chouli</h1>
          <h1 className="bouncing-text">Karam Al-Chouli</h1>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
