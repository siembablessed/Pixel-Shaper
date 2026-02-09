import React from 'react';
import { Layers, Command, Figma, Slack, Codesandbox, PenTool } from 'lucide-react';
import './About.css';

const About = () => {
    const experiences = [
        {
            id: 1,
            company: 'Ride App',
            role: 'Product Designer (Contract)',
            period: 'Dec 2023 - Present'
        },
        {
            id: 2,
            company: 'Peryton',
            role: 'Product Designer (Contract)',
            period: 'Jan 2023 - Dec 2023'
        },
        {
            id: 3,
            company: 'Uncommon LSE',
            role: 'Lead Project Designer',
            period: 'Jun 2022 - Present'
        },
        {
            id: 4,
            company: 'LSE',
            role: 'Product Designer (Intern)',
            period: 'Jan 2022 - Jun 2022'
        }
    ];

    /* Using Lucide icons as placeholders for specific brand logos */
    const stacks = [
        { id: 1, name: 'Figma', icon: <Figma /> },
        { id: 2, name: 'Notion', icon: <FileTextIcon /> },
        { id: 3, name: 'Linear', icon: <Layers /> },
        { id: 4, name: 'Miro', icon: <PenTool /> },
        { id: 5, name: 'Spark', icon: <Codesandbox /> },
        { id: 6, name: 'Raycast', icon: <Command /> },
        { id: 7, name: 'Arc', icon: <Slack /> } // Placeholder
    ];

    return (
        <section className="about-section section-padding" id="about-me">
            <div className="container">
                <div className="section-header text-center">
                    <div className="section-badge">About Me</div>
                    <h2 className="section-title">
                        Now meet the <span className="text-italic-serif">problem-solver</span>.
                    </h2>
                    <p className="section-subtitle">
                        Understanding people to create cleaver meaningful solutions.
                    </p>
                </div>

                <div className="about-grid">
                    {/* Experience Column */}
                    <div className="about-col experience-col">
                        <h3 className="col-title">Experience</h3>
                        <div className="experience-list">
                            {experiences.map((exp) => (
                                <div key={exp.id} className="experience-item">
                                    <div className="exp-dot"></div>
                                    <div className="exp-content">
                                        <h4 className="exp-company">{exp.company}</h4>
                                        <p className="exp-role">{exp.role}</p>
                                    </div>
                                    <div className="exp-period-badge">{exp.period}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stacks Column */}
                    <div className="about-col stacks-col">
                        <h3 className="col-title">Essential Stacks</h3>
                        <p className="stacks-subtitle">A compilation of tools that help me keep organized and productive.</p>
                        <div className="stacks-grid">
                            {stacks.map((stack) => (
                                <div key={stack.id} className="stack-item" title={stack.name}>
                                    {stack.icon}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

// Helper for Notion icon since it's not in standard import sometimes without looking up exact name
const FileTextIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
);

export default About;
