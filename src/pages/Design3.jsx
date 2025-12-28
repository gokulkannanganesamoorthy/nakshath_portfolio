import React from 'react';
import Hero from '../components/design3/Hero';
import About from '../components/design3/About';
import Programs from '../components/design3/Programs';
import FAQ from '../components/design3/FAQ';
import Contact from '../components/design3/Contact';
import '../styles/design3.css';

const Design3 = () => {
    return (
        <div className="design3-container">
            <Hero />
            <About />
            <Programs />
            <FAQ />
            <Contact />
        </div>
    );
};

export default Design3;
