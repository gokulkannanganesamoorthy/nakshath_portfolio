import React from 'react';
import nakshathImg from '../../assets/nakshath.png';

const About = () => {
    return (
        <section className="d2-about">
            <div className="container d2-about-grid">
                <div className="d2-about-text">
                    <h2 className="d2-section-title">Who is <br/><span className="d2-text-primary">Nakshath?</span></h2>
                    <p className="d2-body-text">
                        A 19-year-old force of nature from Chennai. I don't just lift; I engineer physiques. 
                        My philosophy is simple: <strong>Intensity. Precision. Results.</strong>
                    </p>
                    <p className="d2-body-text">
                        I've spent years refining the art of bodybuilding, transforming not just my body but my mind. 
                        Now, I'm here to forge the next generation of titans.
                    </p>
                    
                    <div className="d2-stats-row">
                        <div className="d2-stat">
                            <span className="val">5+</span>
                            <span className="lbl">Years Exp</span>
                        </div>
                        <div className="d2-stat">
                            <span className="val">100+</span>
                            <span className="lbl">Clients</span>
                        </div>
                    </div>
                </div>
                <div className="d2-about-visual">
                    <div className="d2-box">
                        <img 
                            src={nakshathImg} 
                            alt="Nakshath" 
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .d2-about {
                    padding: 8rem 2rem;
                    background: #050505;
                    position: relative;
                }
                
                .d2-about-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .d2-section-title {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    line-height: 1.1;
                    margin-bottom: 2rem;
                }

                .d2-body-text {
                    font-size: 1.1rem;
                    color: #aaa;
                    margin-bottom: 2rem;
                    line-height: 1.8;
                }

                .d2-stats-row {
                    display: flex;
                    gap: 4rem;
                    margin-top: 3rem;
                    border-top: 1px solid #222;
                    padding-top: 2rem;
                }

                .d2-stat {
                    display: flex;
                    flex-direction: column;
                }

                .d2-stat .val {
                    font-size: 3rem;
                    font-family: var(--d2-font-head);
                    color: var(--d2-secondary);
                    font-weight: 700;
                }

                .d2-stat .lbl {
                    font-size: 0.9rem;
                    color: #666;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .d2-about-visual {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .d2-box {
                    width: 300px;
                    height: 400px;
                    border: 2px solid #333;
                    position: relative;
                }

                .d2-box img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    filter: grayscale(100%);
                    transition: filter 0.3s ease;
                }
                
                .d2-box:hover img {
                    filter: grayscale(0%);
                }

                .d2-box::after {
                    content: '';
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    width: 100%;
                    height: 100%;
                    border: 2px solid var(--d2-primary);
                    z-index: -1;
                }
                
                @media (max-width: 768px) {
                    .d2-about-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
