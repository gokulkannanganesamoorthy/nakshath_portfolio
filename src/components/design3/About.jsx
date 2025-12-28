import React from 'react';
import nakshathImg from '../../assets/nakshath.png';

const About = () => {
    return (
        <section className="d3-section">
            <div className="d3-container d3-about-layout">
                <div className="d3-about-text">
                    <h2 className="d3-heading">The Visionary</h2>
                    <p className="d3-bio">
                        Nakshath represents the new vanguard of fitness. 
                        At 19, he merges old-school intensity with modern scientific precision.
                        This isn't just training; it's a pursuit of aesthetic perfection.
                    </p>
                    <div className="d3-stats-minimal">
                        <div className="stat">
                            <span className="num">05</span>
                            <span className="lbl">YRS EXP</span>
                        </div>
                        <div className="stat">
                            <span className="num">100</span>
                            <span className="lbl">CLIENTS</span>
                        </div>
                    </div>
                </div>
                <div className="d3-about-img">
                     <img src={nakshathImg} alt="Nakshath Portrait" />
                </div>
            </div>

            <style jsx>{`
                .d3-about-layout {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 4rem;
                }

                .d3-about-text {
                    flex: 1;
                    padding-top: 4rem;
                }

                .d3-bio {
                    font-size: 1.5rem;
                    line-height: 1.4;
                    margin-top: 2rem;
                    margin-bottom: 4rem;
                    color: #ccc;
                    font-weight: 300;
                    border-left: 1px solid #333;
                    padding-left: 2rem;
                }

                .d3-stats-minimal {
                    display: flex;
                    gap: 4rem;
                }

                .d3-stats-minimal .stat {
                    display: flex;
                    flex-direction: column;
                }

                .d3-stats-minimal .num {
                    font-family: var(--d3-font-serif);
                    font-size: 4rem;
                    line-height: 1;
                }

                .d3-stats-minimal .lbl {
                    font-size: 0.8rem;
                    letter-spacing: 0.2rem;
                    margin-top: 0.5rem;
                    color: #666;
                }

                .d3-about-img {
                    flex: 1;
                    height: 600px;
                    overflow: hidden;
                }

                .d3-about-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(100%);
                }

                @media (max-width: 768px) {
                    .d3-about-layout {
                        flex-direction: column;
                    }
                    .d3-about-img {
                        width: 100%;
                        height: 400px;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
