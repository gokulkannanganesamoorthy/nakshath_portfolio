import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        { q: "SYSTEM_REQ: Do beginners qualify?", a: "Affirmative. The protocols are scalable. We build your foundation before ensuring hypertrophy." },
        { q: "NUTRITION_LOGIC: Is meal planning included?", a: "Integrated. Fueling strategy is calculated precisely for your metabolic parameters." },
        { q: "REMOTE_ACCESS: How does online coaching work?", a: "Via the App Mainframe. You upload data (form videos), I analyze and re-calibrate your program weekly." },
        { q: "EQUIPMENT_CHECK: Can I train at home?", a: "Yes. Programs are adaptable to available hardware, irrespective of location." }
    ];

    const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

    return (
        <section className="d2-faq">
            <div className="container">
                <h2 className="d2-faq-title">D.A.T.A. <span className="d2-text-primary">BANK</span></h2>
                
                <div className="d2-accordion">
                    {questions.map((item, idx) => (
                        <div key={idx} className={`d2-item ${openIndex === idx ? 'active' : ''}`}>
                            <div className="d2-question" onClick={() => toggle(idx)}>
                                <span className="d2-q-text">{item.q}</span>
                                <span className="d2-icon">{openIndex === idx ? '−' : '+'}</span>
                            </div>
                            <div className="d2-answer" style={{ maxHeight: openIndex === idx ? '200px' : '0' }}>
                                <p>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .d2-faq {
                    padding: 8rem 2rem;
                    background: #050505;
                }

                .d2-faq-title {
                    text-align: center;
                    font-size: 3rem;
                    margin-bottom: 4rem;
                }

                .d2-accordion {
                    max-width: 800px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .d2-item {
                    border: 1px solid #222;
                    background: #0a0a0a;
                    transition: all 0.3s ease;
                }

                .d2-item.active {
                    border-color: var(--d2-primary);
                }

                .d2-question {
                    padding: 1.5rem;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-family: var(--d2-font-head);
                    font-size: 1.1rem;
                    color: #fff;
                }
                
                .d2-item.active .d2-question {
                    color: var(--d2-primary);
                }

                .d2-answer {
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                    padding: 0 1.5rem;
                }

                .d2-answer p {
                    padding-bottom: 1.5rem;
                    color: #aaa;
                    line-height: 1.6;
                }

                .d2-icon {
                    font-size: 1.5rem;
                    font-weight: bold;
                }
            `}</style>
        </section>
    );
};

export default FAQ;
