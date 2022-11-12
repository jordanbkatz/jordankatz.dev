import React from 'react';
import { FaEye, FaCode } from 'react-icons/fa';
import Section from '../Section';
import projects from '../../data/projects';
import './Projects.scss';

const Projects = () => {
    return (
        <Section name="Projects">
            {projects.map(project => (
                <div className="project" key={project.name}>
                    <h1 className="name">{project.name}</h1>
                    <p className="description">{project.description}</p>
                    <div className="links">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <FaEye className="icon" />
                            <p>Live Demo</p>
                        </a>
                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                            <FaCode className="icon" />
                            <p>Source Code</p>
                        </a>
                    </div>
                </div>
            ))}
        </Section>
    );
};

export default Projects;