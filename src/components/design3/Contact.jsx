import React from 'react';

const Contact = () => {
    return (
        <section className="d3-section" style={{ borderBottom: 'none', paddingBottom: '10rem' }}>
            <div className="d3-container">
                <h2 className="d3-display-title" style={{ fontSize: '15vw', textAlign: 'center', lineHeight: '0.8' }}>
                    LET'S<br/>WORK
                </h2>
                
                <form className="d3-form">
                    <div className="d3-input-group">
                        <label>NAME</label>
                        <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="d3-input-group">
                        <label>EMAIL</label>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="d3-input-group">
                        <button className="d3-submit-btn">SUBMIT</button>
                    </div>
                </form>
            </div>

            <style jsx>{`
                .d3-form {
                    max-width: 600px;
                    margin: 4rem auto 0;
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                }

                .d3-input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .d3-input-group label {
                    font-family: var(--d3-font-sans);
                    font-size: 0.8rem;
                    letter-spacing: 0.1em;
                    color: #666;
                }

                .d3-input-group input {
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid #333;
                    padding: 1rem 0;
                    font-family: var(--d3-font-serif);
                    font-size: 2rem;
                    color: #fff;
                    outline: none;
                    transition: border-color 0.3s;
                }

                .d3-input-group input:focus {
                    border-bottom: 1px solid #fff;
                }

                .d3-submit-btn {
                    width: 100%;
                    padding: 1.5rem;
                    background: #fff;
                    color: #000;
                    border: none;
                    font-family: var(--d3-font-sans);
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    cursor: pointer;
                    text-transform: uppercase;
                    transition: transform 0.2s;
                }

                .d3-submit-btn:hover {
                    transform: scale(1.02);
                }
            `}</style>
        </section>
    );
};

export default Contact;
