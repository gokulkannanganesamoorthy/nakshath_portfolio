import React from 'react';
import nakshathImg from '../../assets/nakshath.png';

const Hero = () => {
    return (
        <section className="d3-hero">
            <div className="d3-hero-top-border"></div>
            
            <div className="d3-container d3-hero-layout">
                <div className="d3-hero-text">
                    <span className="d3-label">EST. 2005 &mdash; CHENNAI</span>
                    <h1 className="d3-display-title">
                        NAK<br/>
                        <span style={{ marginLeft: '10vw', fontStyle: 'italic', fontWeight: 400 }}>SHATH</span>
                    </h1>
                </div>
                
                <div className="d3-hero-visual">
                    <div className="d3-img-container">
                        <img src={nakshathImg} alt="Nakshath" className="d3-img-mono" />
                    </div>
                    <div className="d3-hero-cta">
                        <p className="d3-desc">
                            The human body is a canvas.<br/>
                            We are the sculptors.
                        </p>
                        <button className="d3-btn">START</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .d3-hero {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                    padding: 2rem 0;
                }
                
                .d3-hero-top-border {
                    position: absolute;
                    top: 2rem;
                    left: 2rem;
                    right: 2rem;
                    height: 1px;
                    background: #333;
                }

                .d3-hero-layout {
                    width: 100%;
                    padding: 0 2rem;
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    align-items: center;
                    gap: 2rem;
                }

                .d3-img-container {
                    width: 100%;
                    height: 60vh;
                    overflow: hidden;
                    position: relative;
                }

                .d3-img-mono {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(100%) contrast(1.1);
                    transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1);
                }
                
                .d3-img-container:hover .d3-img-mono {
                    transform: scale(1.05);
                }

                .d3-hero-cta {
                    margin-top: 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    border-top: 1px solid #333;
                    padding-top: 2rem;
                }

                .d3-desc {
                    font-family: var(--d3-font-serif);
                    font-size: 1.25rem;
                    color: #aaa;
                    line-height: 1.4;
                }

                @media (max-width: 1024px) {
                    .d3-hero-layout {
                        grid-template-columns: 1fr;
                    }
                    .d3-hero-text {
                        order: 2;
                    }
                    .d3-hero-visual {
                        order: 1;
                    }
                    .d3-display-title {
                        font-size: 20vw;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
