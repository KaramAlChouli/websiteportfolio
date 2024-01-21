import React from 'react';
import { FaLink } from "react-icons/fa";
const Project = ({ project }) => {
  const githubIconUrl = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";

  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ul className="project-languages"> 
        {project.languages.map(lang => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="github-icon">
        <FaLink size={20} />
      </a>
    </div>
  );
};

export default Project;
