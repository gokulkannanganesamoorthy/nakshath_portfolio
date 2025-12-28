import React from 'react';

const Programs = () => {
    const programs = [
        { id: '01', title: 'Hypertrophy', price: '1999', desc: 'Muscle Growth Protocol' },
        { id: '02', title: 'Definition', price: '2499', desc: 'Fat Loss & Shred' },
        { id: '03', title: 'Mentorship', price: 'Custom', desc: '1:1 Coaching' },
    ];

    return (
        <section className="d3-section">
            <div className="d3-container">
                <div className="d3-prog-header">
                    <span className="d3-label">OFFERINGS</span>
                    <h2 className="d3-heading">Protocols</h2>
                </div>

                <div className="d3-prog-list">
                    {programs.map((p) => (
                        <div key={p.id} className="d3-prog-item">
                            <span className="d3-prog-id">{p.id}</span>
                            <div className="d3-prog-main">
                                <h3 className="d3-prog-title">{p.title}</h3>
                                <p className="d3-prog-desc">{p.desc}</p>
                            </div>
                            <div className="d3-prog-action">
                                <span className="d3-prog-price">{typeof p.price === 'number' ? `\u20B9${p.price}` : p.price}</span>
                                <button className="d3-arrow-btn">&rarr;</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .d3-prog-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    margin-bottom: 4rem;
                    border-bottom: 1px solid #333;
                    padding-bottom: 1rem;
                }

                .d3-prog-list {
                    display: flex;
                    flex-direction: column;
                }

                .d3-prog-item {
                    display: grid;
                    grid-template-columns: 0.5fr 2fr 1fr;
                    align-items: center;
                    padding: 3rem 0;
                    border-bottom: 1px solid #222;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .d3-prog-item:hover {
                    background: #0a0a0a;
                    padding-left: 2rem;
                }

                .d3-prog-id {
                    font-family: var(--d3-font-serif);
                    font-size: 1.5rem;
                    color: #444;
                }

                .d3-prog-title {
                    font-family: var(--d3-font-serif);
                    font-size: 3rem;
                    font-weight: 400;
                }

                .d3-prog-desc {
                    font-family: var(--d3-font-sans);
                    color: #888;
                    margin-top: 0.5rem;
                }

                .d3-prog-action {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .d3-prog-price {
                    font-size: 1.2rem;
                    letter-spacing: 1px;
                }

                .d3-arrow-btn {
                    background: none;
                    border: 1px solid #fff;
                    color: #fff;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    font-size: 1.5rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s;
                }

                .d3-prog-item:hover .d3-arrow-btn {
                    background: #fff;
                    color: #000;
                    transform: rotate(-45deg);
                }

                @media (max-width: 768px) {
                    .d3-prog-item {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }
                    .d3-prog-id { display: none; }
                }
            `}</style>
        </section>
    );
};

export default Programs;
