import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const projects = [
  {
    name: 'Project 1',
    image: 'path/to/project1-image.jpg',
    intro: 'Short intro for Project 1',
    link: '/project1'
  },
  {
    name: 'Project 2',
    image: 'path/to/project2-image.jpg',
    intro: 'Short intro for Project 2',
    link: '/project2'
  },
  // Add more projects as needed
];

const HomePage = () => {
  return (
    <div className="home-page">
      {projects.map((project, index) => (
        <div key={index} className="card">
          <img src={project.image} alt={project.name} className="card-image" />
          <div className="card-content">
            <h3>{project.name}</h3>
            <p>{project.intro}</p>
            <Link to={project.link} className="view-project-button">
              View Project
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
