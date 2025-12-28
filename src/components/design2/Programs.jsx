import React from 'react';

const Programs = () => {
    const programs = [
        {
            title: "HYPERTROPHY ORACLE",
            desc: "The ultimate muscle-building protocol. 12 weeks of high-intensity training.",
            price: "\u20B91999"
        },
        {
            title: "SHRED MATRIX",
            desc: "Scientifically designed to strip fat while preserving lean muscle mass.",
            price: "\u20B92499"
        },
        {
            title: "1:1 MASTERY",
            desc: "Direct access to me. Custom nutrition, training, and 24/7 support.",
            price: "Enquire"
        }
    ];

    return (
        <section className="d2-programs">
            <div className="container">
                <h2 className="d2-title-center">Select Your <span className="d2-text-secondary">Path</span></h2>
                
                <div className="d2-programs-grid">
                    {programs.map((prog, idx) => (
                        <div className="d2-card" key={idx}>
                            <h3 className="d2-card-title">{prog.title}</h3>
                            <p className="d2-card-desc">{prog.desc}</p>
                            <div className="d2-card-price">{prog.price}</div>
                            <button className="d2-card-btn">ACCESS</button>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .d2-programs {
                    padding: 8rem 2rem;
                    background: #000;
                }

                .d2-title-center {
                    text-align: center;
                    font-size: 3rem;
                    margin-bottom: 5rem;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .d2-programs-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .d2-card {
                    background: #0a0a0a;
                    border: 1px solid #222;
                    padding: 3rem 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    transition: transform 0.3s ease, border-color 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .d2-card:hover {
                    transform: translateY(-10px);
                    border-color: var(--d2-secondary);
                }

                .d2-card-title {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                    color: #fff;
                }

                .d2-card-desc {
                    color: #888;
                    font-size: 1rem;
                    margin-bottom: 2rem;
                    flex-grow: 1;
                }

                .d2-card-price {
                    font-size: 2rem;
                    color: var(--d2-primary);
                    font-family: var(--d2-font-head);
                    font-weight: 700;
                    margin-bottom: 2rem;
                }

                .d2-card-btn {
                    padding: 0.8rem 2rem;
                    background: transparent;
                    border: 1px solid #fff;
                    color: #fff;
                    font-family: var(--d2-font-head);
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .d2-card-btn:hover {
                    background: #fff;
                    color: #000;
                }
            `}</style>
        </section>
    );
};

export default Programs;
