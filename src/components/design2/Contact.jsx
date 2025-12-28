import React from 'react';

const Contact = () => {
    return (
        <section className="d2-contact">
            <div className="d2-contact-container">
                <h2 className="d2-contact-title">INITIALIZE <br/>COMMUNICATION</h2>
                
                <form className="d2-form">
                    <input type="text" placeholder="CODENAME (NAME)" className="d2-input" />
                    <input type="email" placeholder="FREQUENCY (EMAIL)" className="d2-input" />
                    <textarea placeholder="TRANSMISSION (MESSAGE)" rows="4" className="d2-input"></textarea>
                    
                    <button type="submit" className="d2-submit-btn">SEND TRANSMISSION</button>
                </form>
            </div>

            <style jsx>{`
                .d2-contact {
                    padding: 8rem 2rem;
                    background: linear-gradient(to bottom, #000, #050505);
                    display: flex;
                    justify-content: center;
                }

                .d2-contact-container {
                    width: 100%;
                    max-width: 600px;
                    text-align: center;
                }

                .d2-contact-title {
                    font-size: 3rem;
                    margin-bottom: 4rem;
                    color: #fff;
                }

                .d2-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .d2-input {
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid #333;
                    padding: 1rem 0;
                    color: #fff;
                    font-family: var(--d2-font-body);
                    font-size: 1.1rem;
                    outline: none;
                    transition: border-color 0.3s;
                    resize: vertical;
                }

                .d2-input:focus {
                    border-bottom-color: var(--d2-primary);
                }

                .d2-submit-btn {
                    margin-top: 2rem;
                    padding: 1.2rem;
                    background: var(--d2-primary);
                    color: #000;
                    border: none;
                    font-family: var(--d2-font-head);
                    font-weight: 700;
                    font-size: 1.1rem;
                    cursor: pointer;
                    letter-spacing: 1px;
                }
                
                .d2-submit-btn:hover {
                    background: #fff;
                }
            `}</style>
        </section>
    );
};

export default Contact;
