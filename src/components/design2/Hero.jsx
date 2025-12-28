import React, { useEffect, useState } from 'react';
import nakshathImg from '../../assets/nakshath.png';

const Hero = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="d2-hero">
            <div className="d2-hero-bg-text" style={{ transform: `translateX(${offset * 0.5}px)` }}>
                FITNESS
            </div>
            
            <div className="d2-hero-content container">
                <div className="d2-hero-text">
                    <h2 className="d2-animate-up" style={{ animationDelay: '0.2s' }}>The Architect</h2>
                    <h1 className="d2-animate-up d2-glitch" style={{ animationDelay: '0.4s' }}>
                        NAKSHATH
                    </h1>
                    <p className="d2-animate-up" style={{ animationDelay: '0.6s' }}>
                        19 YEARS. CHENNAI. <span className="d2-text-primary">UNSTOPPABLE.</span>
                    </p>
                    <button className="d2-btn d2-animate-up" style={{ animationDelay: '0.8s' }}>
                        INITIATE PROTOCOL
                    </button>
                </div>

                <div className="d2-hero-image-wrapper">
                    <img 
                        src={nakshathImg} 
                        alt="Nakshath" 
                        className="d2-hero-img"
                        style={{ transform: `translateY(${offset * 0.2}px)` }}
                    />
                    <div className="d2-hero-ring"></div>
                </div>
            </div>

            <div className="d2-scroll-indicator">
                <span>SCROLL</span>
                <div className="line"></div>
            </div>
            
            <style jsx>{`
                .d2-hero {
                    height: 100vh;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    background: radial-gradient(circle at 70% 30%, #1a1a1a 0%, #000 70%);
                }

                .d2-hero-bg-text {
                    position: absolute;
                    font-size: 20vw;
                    font-family: var(--d2-font-head);
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.03);
                    white-space: nowrap;
                    top: 50%;
                    left: -20%;
                    transform: translateY(-50%);
                    z-index: 0;
                    pointer-events: none;
                }

                .d2-hero-content {
                    width: 100%;
                    max-width: 1200px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                    z-index: 1;
                    padding: 0 2rem;
                }

                .d2-hero-text h2 {
                    font-size: 1.5rem;
                    color: #888;
                    margin-bottom: 0.5rem;
                }

                .d2-hero-text h1 {
                    font-size: clamp(3rem, 6vw, 7rem);
                    line-height: 0.9;
                    margin-bottom: 2rem;
                    letter-spacing: -2px;
                }

                .d2-hero-text p {
                    font-size: 1.2rem;
                    color: #ccc;
                    margin-bottom: 3rem;
                    max-width: 400px;
                }

                .d2-hero-image-wrapper {
                    position: relative;
                    display: flex;
                    justify-content: center;
                }

                .d2-hero-img {
                    width: 100%;
                    max-width: 500px;
                    height: auto;
                    filter: grayscale(100%) contrast(1.1) brightness(0.8);
                    transition: filter 0.5s ease;
                    z-index: 2;
                }

                .d2-hero-img:hover {
                    filter: grayscale(0%) contrast(1.2) drop-shadow(0 0 20px rgba(45, 226, 230, 0.4));
                }

                .d2-hero-ring {
                    position: absolute;
                    width: 400px;
                    height: 400px;
                    border: 2px solid var(--d2-primary);
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 1;
                    opacity: 0.3;
                    animation: pulse 4s infinite;
                }

                .d2-scroll-indicator {
                    position: absolute;
                    bottom: 2rem;
                    left: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }

                .d2-scroll-indicator span {
                    writing-mode: vertical-rl;
                    font-size: 0.8rem;
                    letter-spacing: 3px;
                    color: #555;
                }

                .d2-scroll-indicator .line {
                    height: 50px;
                    width: 1px;
                    background: #555;
                }

                @keyframes pulse {
                    0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.3; }
                    50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.1; }
                    100% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.3; }
                }

                @media (max-width: 768px) {
                    .d2-hero-content {
                        grid-template-columns: 1fr;
                        text-align: center;
                        gap: 3rem;
                    }
                    
                    .d2-hero-text p {
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .d2-hero-bg-text {
                        font-size: 30vw;
                        top: 20%;
                    }

                    .d2-scroll-indicator {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
