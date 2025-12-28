import React from 'react';

const Apply = () => {
    return (
        <section className="d4-section d4-dark-section" id="apply">
            <div className="d4-container">
                <div className="d4-apply-grid">
                    <div className="d4-apply-copy">
                        <h2 className="d4-heading" style={{ color: '#fff' }}>READY TO COMMIT?</h2>
                        <p className="d4-sub">
                            I only work with people who are 100% serious about transformation. 
                            If you're ready to do the work, I'll provide the path.
                        </p>
                        <div className="d4-guarantee">
                            <h3>🛡️ 100% ACTION GUARANTEE</h3>
                            <p>If you follow the plan and don't see results in 30 days, I'll work with you for free until you do.</p>
                        </div>
                    </div>

                    <form className="d4-form">
                        <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--d4-font-head)', color: '#000' }}>Start Your Application</h3>
                        <input type="text" placeholder="Full Name" className="d4-input" />
                        <input type="email" placeholder="Email Address" className="d4-input" />
                        <select className="d4-input">
                            <option>What is your main goal?</option>
                            <option>Fat Loss</option>
                            <option>Muscle Gain</option>
                            <option>Contest Prep</option>
                        </select>
                        <button className="d4-btn-gold" style={{ width: '100%', marginTop: '1rem' }}>SUBMIT APPLICATION &rarr;</button>
                        <p className="d4-secure">🔒 Secure Application. Limited Availability.</p>
                    </form>
                </div>
            </div>

            <style jsx>{`
                .d4-apply-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 6rem;
                    align-items: center;
                }

                .d4-guarantee {
                    border: 2px dashed #444;
                    padding: 2rem;
                    border-radius: 10px;
                    margin-top: 2rem;
                    background: rgba(255,255,255,0.05);
                }

                .d4-guarantee h3 { color: var(--d4-secondary); margin-bottom: 0.5rem; font-family: var(--d4-font-head); }
                .d4-guarantee p { font-size: 0.9rem; color: #ccc; }

                .d4-form {
                    background: #fff;
                    padding: 2.5rem;
                    border-radius: 10px;
                    color: #000;
                }

                .d4-input {
                    display: block;
                    width: 100%;
                    padding: 1rem;
                    margin-bottom: 1rem;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    font-size: 1rem;
                    font-family: var(--d4-font-body);
                }

                .d4-secure {
                    text-align: center;
                    font-size: 0.8rem;
                    color: #666;
                    margin-top: 1rem;
                }

                @media (max-width: 768px) {
                    .d4-apply-grid { grid-template-columns: 1fr; gap: 3rem; }
                }
            `}</style>
        </section>
    );
};

export default Apply;
