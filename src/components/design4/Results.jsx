import React from 'react';

const Results = () => {
    return (
        <section className="d4-section" style={{ paddingBottom: '0' }}>
            <div className="d4-container">
                <div className="d4-stats-bar">
                    <div className="d4-stat">
                        <h3>98%</h3>
                        <p>Client Success Rate</p>
                    </div>
                    <div className="d4-stat">
                        <h3>500+</h3>
                        <p>Physiques Built</p>
                    </div>
                    <div className="d4-stat">
                        <h3>100%</h3>
                        <p>Science Based</p>
                    </div>
                </div>

                <div className="d4-why-grid">
                    <div className="d4-why-content">
                        <h2 className="d4-heading" style={{ color: 'var(--d4-primary)' }}>WHY MOST FAIL <br/>(AND YOU WON'T)</h2>
                        <p className="d4-sub">
                            Most generic plans fail because they aren't built for <strong>YOU</strong>. 
                            They ignore your metabolism, your lifestyle, and your biomechanics.
                        </p>
                        <p className="d4-text">
                            My "Elite Performance Protocol" is different. We reverse-engineer your goal 
                            and build a roadmap that makes failure impossible. This is not just training. 
                            It's a complete system renovation.
                        </p>
                    </div>
                    <div className="d4-why-steps">
                        <div className="d4-step">
                            <div className="num">01</div>
                            <h4>Analyze</h4>
                            <p>Deep dive into your current state and habits.</p>
                        </div>
                        <div className="d4-step">
                            <div className="num">02</div>
                            <h4>Architect</h4>
                            <p>Build the custom nutrition and training blocks.</p>
                        </div>
                        <div className="d4-step">
                            <div className="num">03</div>
                            <h4>Execute</h4>
                            <p>Weekly adjustments to ensure linear progression.</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .d4-stats-bar {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    background: #000;
                    color: white;
                    padding: 3rem;
                    border-radius: 10px;
                    transform: translateY(-50%);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                }

                .d4-stat { text-align: center; border-right: 1px solid #333; }
                .d4-stat:last-child { border-right: none; }
                .d4-stat h3 { color: var(--d4-secondary); font-size: 2.5rem; font-family: var(--d4-font-head); margin-bottom: 0.5rem; }
                .d4-stat p { font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }

                .d4-why-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                    padding: 4rem 0;
                }

                .d4-text { font-size: 1.1rem; color: #444; margin-bottom: 2rem; }

                .d4-step { display: flex; align-items: flex-start; margin-bottom: 2rem; }
                .d4-step .num { 
                    font-size: 2rem; font-weight: 900; color: #eee; margin-right: 1.5rem; line-height: 1;
                    font-family: var(--d4-font-head);
                }
                .d4-step h4 { font-size: 1.2rem; font-weight: 700; margin-bottom: 0.25rem; font-family: var(--d4-font-head); }
                .d4-step p { font-size: 0.9rem; color: #666; }

                @media (max-width: 768px) {
                    .d4-stats-bar { grid-template-columns: 1fr; gap: 2rem; transform: translateY(0); margin-bottom: 3rem; }
                    .d4-stat { border-right: none; border-bottom: 1px solid #333; padding-bottom: 1rem; }
                    .d4-why-grid { grid-template-columns: 1fr; gap: 2rem; }
                }
            `}</style>
        </section>
    );
};

export default Results;
