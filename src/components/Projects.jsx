import React from 'react';
import './Projects.css';
import rideoLogo from '../assets/project-rideo-logo.png';
import prayordieLogo from '../assets/project-prayordie-logo.png';
import uncommonLogo from '../assets/project-uncommon-logo.png';
import mytripLogo from '../assets/project-mytrip-logo.png';
import upickLogo from '../assets/project-upick-logo.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Coming Soon', // Special case
            subtitle: 'N/A',
            isComingSoon: true,
            theme: 'dark-grey'
        },
        {
            id: 2,
            title: 'Rideo',
            subtitle: 'End-to-end Travel Service - Assess Project',
            status: 'In-progress',
            image: rideoLogo,
            theme: 'dark-green',
            logoAlt: 'Rideo'
        },
        {
            id: 3,
            title: 'PrayorDie',
            subtitle: 'Clothing Service - Volunteer Project',
            status: 'In-progress',
            image: prayordieLogo,
            theme: 'black-green',
            logoAlt: 'PrayorDie'
        },
        {
            id: 4,
            title: 'Uncommon LMS',
            subtitle: 'Learning-management Service - Internal Project',
            status: '06 June 2025',
            image: uncommonLogo,
            theme: 'blue',
            logoAlt: 'Uncommon'
        },
        {
            id: 5,
            title: 'MyTrip Nature Travel',
            subtitle: 'End-to-end Travel Service - Assessment Project',
            status: '24 January 2025',
            image: mytripLogo,
            theme: 'white',
            logoAlt: 'MyTrip'
        },
        {
            id: 6,
            title: 'Upick',
            subtitle: 'Delivery Service - Paid Project',
            status: '19 September 2024',
            image: upickLogo,
            theme: 'yellow',
            logoAlt: 'Upick'
        }
    ];

    return (
        <section className="projects-section section-padding" id="projects">
            <div className="container">
                <div className="section-header text-center">
                    <div className="section-badge">Works & Projects</div>
                    <h2 className="section-title">
                        Check out my design <span className="text-italic-serif text-muted">projects</span>.
                    </h2>
                    <p className="section-subtitle">
                        Selected projects that highlight my process, decisions and the impact of user-focused design.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-item">
                            {/* Visual Card */}
                            <div className={`project-card theme-${project.theme}`}>
                                {project.isComingSoon ? (
                                    <div className="coming-soon-content">
                                        <h3>Coming Soon</h3>
                                    </div>
                                ) : (
                                    <div className="card-image-wrapper">
                                        <img src={project.image} alt={project.logoAlt} className="project-image" />
                                    </div>
                                )}
                            </div>

                            {/* Info Below Card */}
                            <div className="project-meta">
                                <h3 className="meta-title">{project.title}</h3>
                                <div className="meta-divider"></div>
                                <p className="meta-subtitle">{project.subtitle}</p>
                                <span className={`meta-pill ${project.isComingSoon ? 'pill-na' : ''}`}>
                                    {project.status || 'N/A'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
