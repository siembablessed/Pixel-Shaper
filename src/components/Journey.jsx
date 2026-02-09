import React from 'react';
import { Search, FileText, Lightbulb, PenTool, Package } from 'lucide-react';
import './Journey.css';

const Journey = () => {
    const steps = [
        {
            id: 1,
            icon: <Search className="step-icon" />,
            title: 'Discover',
            description: 'Understanding requirements & user needs.'
        },
        {
            id: 2,
            icon: <FileText className="step-icon" />,
            title: 'Define',
            description: 'Structuring the problem & solution path.'
        },
        {
            id: 3,
            icon: <Lightbulb className="step-icon" />,
            title: 'Ideate',
            description: 'Brainstorming creative possibilities.'
        },
        {
            id: 4,
            icon: <PenTool className="step-icon" />,
            title: 'Prototype',
            description: 'Building interactive mockups.'
        },
        {
            id: 5,
            icon: <Package className="step-icon" />,
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
                    {steps.map((step, index) => (
                        <div key={step.id} className={`journey-card animate-fade-in delay-${(index + 1) * 100}`}>
                            <div className="icon-wrapper">
                                {step.icon}
                            </div>
                            <div className="step-number">Step 0{step.id}</div>
                            <h3 className="step-title">{step.title}</h3>
                            {/* Description is hidden in design per image, but good for SEO/Hover? 
                  The image just shows Icon + 'Step 01' + 'Discover'. 
                  I will keep it minimal as per image. */}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Journey;
