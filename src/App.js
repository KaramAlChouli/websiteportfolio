import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/App.css';
import Header from './Header';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';

import profilePic from './images/image.png';

function Home() {

  return (
    <div className="home-container">
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
