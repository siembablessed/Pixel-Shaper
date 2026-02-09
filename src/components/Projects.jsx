import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Coming Soon',
            subtitle: 'N/A',
            status: 'N/A',
            theme: 'dark'
        },
        {
            id: 2,
            title: 'Ride',
            subtitle: 'Ready. Set. Go. Ride.',
            category: 'Ride Booking App',
            status: 'Full Case',
            theme: 'green',
            logoText: 'Ride'
        },
        {
            id: 3,
            title: 'Peryton',
            subtitle: 'Digital fashion platform',
            category: 'E-commerce',
            status: 'Full Case',
            theme: 'forest',
            logoText: 'PARYTON'
        },
        {
            id: 4,
            title: 'Uncommon Limit',
            subtitle: 'Learning management system',
            category: 'EdTech',
            status: 'Full Case',
            theme: 'blue',
            logoText: 'uncommon'
        },
        {
            id: 5,
            title: 'MySky Network',
            subtitle: 'Internet access made simple',
            category: 'Telecommunications',
            status: 'Full Case',
            theme: 'white',
            logoText: 'MySky'
        },
        {
            id: 6,
            title: 'Uptime',
            subtitle: 'Delivery Service Application',
            category: 'Logistics',
            status: 'In Progress',
            theme: 'yellow',
            logoText: 'Uptime'
        }
    ];

    return (
        <section className="projects-section section-padding" id="projects">
            <div className="container">
                <div className="section-header text-center">
                    <div className="section-badge">Selected Work</div>
                    <h2 className="section-title">
                        Check out my design <span className="text-italic-serif text-muted">projects</span>.
                    </h2>
                    <p className="section-subtitle">
                        Selected projects that highlight my process, decisions and the impact of user-focused design.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-card theme-${project.theme} animate-fade-in delay-${(index % 3) * 100}`}
                        >
                            <div className="card-content">
                                <div className="project-logo">
                                    {project.logoText || 'Logo'}
                                </div>

                                <div className="project-info">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-subtitle">{project.subtitle}</p>
                                </div>

                                <div className="project-footer">
                                    <span className="project-status">{project.status}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
