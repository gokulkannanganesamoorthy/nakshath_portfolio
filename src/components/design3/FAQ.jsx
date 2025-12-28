import React, { useState } from 'react';

const FAQ = () => {
    const [open, setOpen] = useState(null);
    const qs = [
        { q: "Beginners?", a: "We build the foundation. Scaleable intensity." },
        { q: "Nutrition?", a: "Calculated macros. Precise meal plans." },
        { q: "Online?", a: "Global access. Weekly calibration." },
        { q: "Home Training?", a: "Minimalist effective protocols." }
    ];

    return (
        <section className="d3-section">
            <div className="d3-container d3-grid-2">
                <div>
                    <h2 className="d3-heading">Queries</h2>
                    <p className="d3-desc" style={{ marginTop: '2rem', maxWidth: '300px' }}>
                        Clarity is the precursor to execution. Find your answers here.
                    </p>
                </div>
                
                <div className="d3-faq-list">
                    {qs.map((item, i) => (
                        <div key={i} className="d3-faq-item" onClick={() => setOpen(open === i ? null : i)}>
                            <div className="d3-faq-head">
                                <span>{item.q}</span>
                                <span>{open === i ? '—' : '+'}</span>
                            </div>
                            <div className="d3-faq-body" style={{ maxHeight: open === i ? '200px' : '0' }}>
                                <p>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .d3-faq-list {
                    border-top: 1px solid #333;
                }

                .d3-faq-item {
                    border-bottom: 1px solid #333;
                    cursor: pointer;
                }

                .d3-faq-head {
                    padding: 2rem 0;
                    display: flex;
                    justify-content: space-between;
                    font-family: var(--d3-font-serif);
                    font-size: 1.5rem;
                    transition: color 0.3s;
                }

                .d3-faq-item:hover .d3-faq-head {
                    color: #fff;
                    padding-left: 1rem;
                }

                .d3-faq-body {
                    overflow: hidden;
                    transition: max-height 0.4s ease;
                }

                .d3-faq-body p {
                    padding-bottom: 2rem;
                    font-family: var(--d3-font-sans);
                    color: #888;
                }
            `}</style>
        </section>
    );
};

export default FAQ;
