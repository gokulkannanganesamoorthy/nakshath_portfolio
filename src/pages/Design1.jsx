import React from 'react';
import Hero from '../components/design1/Hero';
import Intro from '../components/design1/Intro';
import Services from '../components/design1/Services';
import FAQ from '../components/design1/FAQ';
import Contact from '../components/design1/Contact';
import '../styles/design1.css';

const Design1 = () => {
    return (
        <div className="design1-container">
            <Hero />
            <Intro />
            <Services />
            <FAQ />
            <Contact />
            <footer style={styles.footer}>
                <p>&copy; {new Date().getFullYear()} Nakshath Fitness. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#000',
    color: '#555',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    borderTop: '1px solid #222',
  }
};

export default Design1;
