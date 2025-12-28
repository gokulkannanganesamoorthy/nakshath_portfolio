import React from 'react';
import Hero from '../components/design2/Hero';
import About from '../components/design2/About';
import Programs from '../components/design2/Programs';
import FAQ from '../components/design2/FAQ';
import Contact from '../components/design2/Contact';
import '../styles/design2.css';

const Design2 = () => {
    return (
        <div className="design2-container">
            <Hero />
            <About />
            <Programs />
            <FAQ />
            <Contact />
        </div>
    );
};

export default Design2;
