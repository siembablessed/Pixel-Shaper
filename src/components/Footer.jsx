import React from 'react';
import { Linkedin, Mail, Smartphone, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const skills = [
        'Research', 'Strategy', 'UI/UX', 'Prototyping',
        'Wireframing', 'User Flows', 'User Testing', 'Design System',
        'Persona', 'Mobile App', 'Web App', 'SaaS'
    ];

    return (
        <footer className="footer section-padding">
            <div className="container footer-grid">

                {/* Skills Column */}
                <div className="footer-col skills-col">
                    <h3 className="footer-title">Skills & Expertise</h3>
                    <div className="skills-cloud">
                        {skills.map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>

                {/* Connect Column */}
                <div className="footer-col connect-col">
                    <h3 className="footer-title">Connect</h3>
                    <div className="connect-links">
                        <a href="#" className="connect-link">
                            <Linkedin className="connect-icon" /> LinkedIn
                        </a>
                        <a href="#" className="connect-link">
                            <Smartphone className="connect-icon" /> WhatsApp
                        </a>
                        <a href="#" className="connect-link">
                            <Mail className="connect-icon" /> Email Me
                        </a>
                    </div>
                </div>

            </div>

            <div className="container footer-bottom">
                <div className="copyright">
                    © 2024 Simba Blessed - UX/UI
                </div>
                <div className="footer-signature">
                    Designed by Simba Blessed
                </div>
            </div>
        </footer>
    );
};

export default Footer;
