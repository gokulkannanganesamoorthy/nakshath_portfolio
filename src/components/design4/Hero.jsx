import React from 'react';
import nakshathImg from '../../assets/nakshath.png';

const Hero = () => {
    return (
        <section className="d4-hero">
            <div className="d4-container d4-hero-grid">
                <div className="d4-hero-copy">
                    <div className="d4-scarcity-tag">⚠️ ONLY 3 SPOTS LEFT FOR JAN COHORT</div>
                    <h1 className="d4-hero-head">
                        TRANSFORM YOUR PHYSIQUE IN <span style={{ color: 'var(--d4-secondary)' }}>90 DAYS</span> OR YOU DON'T PAY.
                    </h1>
                    <p className="d4-hero-sub">
                        Stop guessing. Start growing. The exact scientific protocol used by hundreds of clients to shred fat and build lean muscle. 
                    </p>
                    <ul className="d4-hero-bullets">
                        <li>🔥 Custom Nutrition Strategy</li>
                        <li>🔥 Precision Hypertrophy Training</li>
                        <li>🔥 24/7 Expert Guidance</li>
                    </ul>
                    <button className="d4-btn-gold">APPLY FOR COACHING &rarr;</button>
                    <div className="d4-trust">
                        <span>⭐⭐⭐⭐⭐ 500+ Transformations</span>
                    </div>
                </div>
                
                <div className="d4-hero-img-wrap">
                    <img src={nakshathImg} alt="Transformation" className="d4-hero-img" />
                    <div className="d4-float-badge">
                        <span>CERTIFIED</span>
                        <strong>EXPERT</strong>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .d4-hero {
                    background: var(--d4-primary);
                    color: white;
                    padding: 4rem 2rem;
                    min-height: 90vh;
                    display: flex;
                    align-items: center;
                }

                .d4-hero-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }

                .d4-scarcity-tag {
                    background: rgba(255, 215, 0, 0.2);
                    color: #FFD700;
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    border-radius: 4px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    margin-bottom: 2rem;
                    border: 1px solid rgba(255, 215, 0, 0.3);
                }

                .d4-hero-head {
                    font-family: var(--d4-font-head);
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                }

                .d4-hero-sub {
                    font-size: 1.2rem;
                    color: #ccc;
                    margin-bottom: 2rem;
                    max-width: 500px;
                }

                .d4-hero-bullets {
                    list-style: none;
                    margin-bottom: 3rem;
                }

                .d4-hero-bullets li {
                    font-size: 1.1rem;
                    margin-bottom: 0.8rem;
                    font-weight: 600;
                }

                .d4-trust {
                    margin-top: 2rem;
                    font-size: 0.9rem;
                    color: #aaa;
                    font-weight: 600;
                }

                .d4-hero-img-wrap {
                    position: relative;
                    z-index: 1;
                }

                .d4-hero-img-wrap::before {
                    content: '';
                    position: absolute;
                    top: -20px;
                    right: -20px;
                    width: 100%;
                    height: 100%;
                    border: 10px solid var(--d4-secondary);
                    z-index: -1;
                }

                .d4-hero-img {
                    width: 100%;
                    max-height: 600px;
                    object-fit: cover;
                    border-radius: 5px;
                }

                .d4-float-badge {
                    position: absolute;
                    bottom: 30px;
                    left: -30px;
                    background: white;
                    color: black;
                    padding: 1rem;
                    border-radius: 5px;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-family: var(--d4-font-head);
                }

                @media (max-width: 900px) {
                    .d4-hero-grid { grid-template-columns: 1fr; text-align: center; }
                    .d4-hero-sub, .d4-hero-bullets { margin-left: auto; margin-right: auto; text-align: left; display: inline-block; }
                    .d4-float-badge { left: 50%; transform: translateX(-50%); bottom: -20px; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
