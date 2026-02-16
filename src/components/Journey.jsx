import React from 'react';
import './Journey.css';
import iconJourney1 from '../assets/icon-journey-1.png';
import iconJourney2 from '../assets/icon-journey-2.png';
import iconJourney3 from '../assets/icon-journey-3.png';
import iconJourney4 from '../assets/icon-journey-4.png';
import iconJourney5 from '../assets/icon-journey-5.png';

const Journey = () => {
    const steps = [
        {
            id: 1,
            icon: iconJourney1,
            title: 'Discover',
            description: 'Understanding requirements & user needs.'
        },
        {
            id: 2,
            icon: iconJourney2,
            title: 'Define',
            description: 'Structuring the problem & solution path.'
        },
        {
            id: 3,
            icon: iconJourney3,
            title: 'Ideate',
            description: 'Brainstorming creative possibilities.'
        },
        {
            id: 4,
            icon: iconJourney4,
            title: 'Prototype',
            description: 'Building interactive mockups.'
        },
        {
            id: 5,
            icon: iconJourney5,
            title: 'Deliver',
            description: 'Final execution & handoff.'
        }
    ];

    return (
        <section className="journey-section section-padding" id="about">
            <div className="container">

                <div className="section-header text-center">
                    <div className="section-badge">The Process</div>
                    <h2 className="section-title">
                        Let's walk <span className="text-italic-serif text-muted">through</span> the journey.
                    </h2>
                    <p className="section-subtitle">
                        From understanding users to turning insights into meaningful experiences.
                    </p>
                </div>

                <div className="journey-grid">
                    {/* Top Row: 3 cards */}
                    <div className="journey-row top-row">
                        {steps.slice(0, 3).map((step, index) => (
                            <div key={step.id} className="journey-card">
                                <div className="icon-wrapper">
                                    <img src={step.icon} alt={step.title} className="step-icon" />
                                </div>
                                <div className="step-info">
                                    <div className="step-number">Step {step.id}</div>
                                    <h3 className="step-title">{step.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row: 2 cards */}
                    <div className="journey-row bottom-row">
                        {steps.slice(3, 5).map((step, index) => (
                            <div key={step.id} className="journey-card">
                                <div className="icon-wrapper">
                                    <img src={step.icon} alt={step.title} className="step-icon" />
                                </div>
                                <div className="step-info">
                                    <div className="step-number">Step {step.id}</div>
                                    <h3 className="step-title">{step.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Journey;
