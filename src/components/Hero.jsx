import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="status-badge">
                <span className="status-dot"></span>
                Available for Engagement
            </div>

            <h1 className="hero-title">
                Shaping the <span className="italic-text">future</span>
                <br />
                one pixel at a time.
            </h1>

            <p className="hero-subtitle">
                I craft user-first digital experiences that balance form, function and impact.
            </p>

            <div className="hero-actions">
                <button className="primary-btn">Hire Me</button>
                <button className="secondary-btn">PDF Portfolio</button>
            </div>
        </section>
    );
};

export default Hero;
