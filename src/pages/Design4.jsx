import React from 'react';
import Hero from '../components/design4/Hero';
import Results from '../components/design4/Results';
import Pricing from '../components/design4/Pricing';
import Apply from '../components/design4/Apply';
import '../styles/design4.css';

const Design4 = () => {
    return (
        <div className="design4-container">
            <div className="d4-scarcity">
                ⚠️ URGENT: COHORT CLOSING IN 24 HOURS
            </div>
            <Hero />
            <Results />
            <Pricing />
            <Apply />
            <footer style={{ background: '#000', color: '#444', textAlign: 'center', padding: '2rem', fontSize: '0.9rem' }}>
                &copy; NAKSHATH FITNESS INC.
            </footer>
        </div>
    );
};

export default Design4;
