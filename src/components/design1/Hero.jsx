import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={styles.section}>
      <div className="container" style={styles.container}>
        <div className="fade-in" style={styles.content}>
          <span style={styles.tagline}>Est. 2005 &bull; Chennai</span>
          <h1 style={styles.title}>
            SCULPT YOUR <span className="text-accent">LEGACY</span>
          </h1>
          <p style={styles.subtitle}>
            Join Nakshath, the 19-year-old fitness phenomenon redefining strength.
          </p>
          <a href="#contact">
            <button style={styles.button}>Start Your Journey</button>
          </a>
        </div>
      </div>
      <div style={styles.overlay}></div>
    </section>
  );
};

const styles = {
  section: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
    overflow: 'hidden',
    padding: 0,
  },
  container: {
    zIndex: 2,
    textAlign: 'center',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  tagline: {
    color: '#888',
    fontSize: '0.9rem',
    letterSpacing: '3px',
    marginBottom: '1rem',
    display: 'block',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    lineHeight: 1,
    marginBottom: '1.5rem',
    fontWeight: 800,
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: '#ccc',
    marginBottom: '2.5rem',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    padding: '1rem 3rem',
    fontSize: '1rem',
    backgroundColor: 'var(--color-accent)',
    color: '#000',
    border: 'none',
    borderRadius: '0', 
    letterSpacing: '1px',
    fontWeight: 'bold',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(212, 255, 0, 0.05) 0%, transparent 70%)',
    zIndex: 1,
  }
};

export default Hero;
