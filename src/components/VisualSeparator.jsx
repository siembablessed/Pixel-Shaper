import React, { useEffect, useRef, useState } from 'react';
import './VisualSeparator.css';
import visualBg from '../assets/visual-separator.png';

const VisualSeparator = () => {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !bgRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Only animate when in view
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                // Calculate parallax offset
                // Moves slower than scroll speed
                const speed = 0.3;
                const offset = (windowHeight - rect.top) * speed;
                bgRef.current.style.transform = `translateY(${offset * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial call
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="visual-separator">
            <div ref={bgRef} className="visual-background">
                <img
                    src={visualBg}
                    alt="Abstract Fluid Art"
                    className="bg-image"
                />
                <div className="overlay"></div>
            </div>

            <div className="container separator-content">
                <h2 className={`separator-title ${isVisible ? 'visible' : ''}`}>
                    Are you <span className="text-italic-serif">ready?</span>
                </h2>
                <p className={`separator-subtitle ${isVisible ? 'visible' : ''}`}>
                    This could be the start of something big.
                </p>
            </div>
        </section>
    );
};

export default VisualSeparator;
