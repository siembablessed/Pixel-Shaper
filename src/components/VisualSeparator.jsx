import React from 'react';
import './VisualSeparator.css';
import visualBg from '../assets/visual-separator.png';

const VisualSeparator = () => {
    return (
        <section className="visual-separator">
            <div className="visual-background">
                {/* Fluid art background */}
                <img
                    src={visualBg}
                    alt="Abstract Fluid Art"
                    className="bg-image"
                />
                <div className="overlay"></div>
            </div>

            <div className="container separator-content">
                <h2 className="separator-title animate-fade-in">
                    Are you <span className="text-italic-serif text-white">ready?</span>
                </h2>
                <p className="separator-subtitle animate-fade-in delay-100">
                    This could be the start of something big.
                </p>
            </div>
        </section>
    );
};

export default VisualSeparator;
