import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Header.css';
document.querySelectorAll('.header-nav .nav-item a').forEach(item => {
  item.addEventListener('click', function() {
      // Remove 'active' class from all items
      document.querySelectorAll('.header-nav .nav-item a').forEach(innerItem => {
          innerItem.classList.remove('active');
      });

      // Add 'active' class to clicked item
      this.classList.add('active');
  });
});

function Header() {
  return (
<header className="Header">
      <div className="header-name">Karam Al-Chouli</div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>Resume</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;