import React, { useState, useEffect } from 'react';
import './css/Resume.css';

function Resume() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSectionClick = section => {
    console.log("Clicked section:", section); // Debugging line
    setSelectedSection(selectedSection === section ? null : section);
  };

  console.log("Current selected section:", selectedSection); // Debugging line

  return (
    <div className="phone-container">
      <div className="phone-top-bar">
        <p>{currentTime}</p>
      </div>
      <div className="phone-screen">
        <div className="app-grid">
          <div className="app-icon" onClick={() => handleSectionClick('experience')}>
            <p>Experience</p>
          </div>
          <div className="app-icon" onClick={() => handleSectionClick('skills')}>
            <p>Skills</p>
          </div>
          <div className="app-icon" onClick={() => handleSectionClick('education')}>
            <p>Education</p>
          </div>
        </div>

        {selectedSection === 'experience' && (
         <><div className="section-content">
            <h3>Assistant Programmer</h3>
            <p>Grim's Gambit</p>
            <p>July 2023 - Ongoing</p>
            <p>Worked with a Game Designer to utilize the Renpy game engine along with Python to program
              game mechanics such as puzzle progression, menu handling, UI, gallery, game logic. Actively
              debugged and tested for flaws in the game’s code to improve player experience.</p>

          </div><div className="section-content">
              <h3>Programming/STEM Instructor</h3>
              <p>Genius Camp</p>
              <p>September 2022 - Present</p>
              <p>Conducted coding sessions and managed STEM-based educational activities, emphasizing practical 
applications. Mainly focused on programming languages such as Python.</p>

            </div>
            <div className="section-content">
              <h3>STEM Instructor</h3>
              <p>Gems Learning Institute</p>
              <p>October 2022 – January 2024</p>
              <p>Developed STEM curriculum and taught interactive lessons, focusing on computer science and 
mathematics.</p>

            </div>
            <div className="section-content">
              <h3>Volunteer Hours</h3>
              <p>50+ hours volunteering PLASP afterschool program.</p>

            </div>
            </>
        )}

        {selectedSection === 'skills' && (
          <><div className="section-content">
            <h3>Programming Proficiency</h3>
            <p>Python, Java, JavaScript C, C++, SQL, Bash, HTML, CSS, React, Prolog, Lisp</p>
          </div><div className="section-content">
              <h3>Software Development Skills</h3>
              <p>Software Engineering Principles, Data Manipulation, Algorithm Design</p>
            </div>
            <div className="section-content">
              <h3>Systems Understanding</h3>
              <p> Computer Organization, Operating Systems, Networks</p>
            </div>
            <div className="section-content">
              <h3>Database and Security</h3>
              <p> Database Systems, Computer Security, Artificial Intelligence, Machine Learning (Basic AI and ML principles)</p>
            </div>
            <div className="section-content">
              <h3>IDEs</h3>
              <p>InteliJ, Visual Studio Code, Eclipse, Apache Netbeans</p>
            </div>
            <div className="section-content">
              <h3>Games</h3>
              <p>Unity 3D, Renpy, Minecraft Plugins</p>
            </div>
            <div className="section-content">
              <h3>Other</h3>
              <p>Fluent in English and Arabic</p>
            </div></>
        )}

        {selectedSection === 'education' && (
          <div className="section-content">
            <p>B.Sc - Toronto Metropolitan University</p>
            <p>Computer Science</p>
            <p>Sept 2021 - April 2025</p>
            
            {/* Education Section Content */}
          </div>

        )}
      </div>
    </div>
  );
}

export default Resume;
