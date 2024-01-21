import React, { useState } from 'react';
import Project from './Project';
import projectsData from './ProjectData';
import './css/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectsData
    : projectsData.filter(p => p.languages.includes(filter));

  return (
    <div className="projects-container"> 
      <select className="projects-filter" onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Java">Java</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
      </select>

      <div className="project-list">
        {filteredProjects.map(project => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;