import React from 'react';
import nakshathImg from '../../assets/nakshath.png';

const Intro = () => {
  return (
    <section id="intro" style={styles.section}>
      <div className="container" style={styles.grid}>
        <div className="fade-in" style={styles.imageWrapper}>
          <div style={styles.imageFrame}>
            <img src={nakshathImg} alt="Nakshath showing biceps" style={styles.image} />
          </div>
        </div>
        <div className="fade-in" style={styles.content}>
          <h2 style={styles.heading}>Meet <span className="text-accent">Nakshath</span></h2>
          <p style={styles.text}>
            At just 19 years old, I'm not just chasing gains; I'm chasing greatness. Based in the heart of <strong>Chennai</strong>, I've dedicated my life to the art of body sculpting and functional fitness.
          </p>
          <p style={styles.text}>
            Fitness isn't just a hobby—it's a lifestyle. Whether you're looking to build muscle, lose fat, or just feel more confident in your skin, I'm here to guide you through every rep, every set, and every meal.
          </p>
          <div style={styles.stats}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>19</span>
              <span style={styles.statLabel}>Years Old</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>100%</span>
              <span style={styles.statLabel}>Dedication</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>CH N</span>
              <span style={styles.statLabel}>Based</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#0a0a0a',
    padding: '6rem 2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
    alignItems: 'center',
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  imageFrame: {
    position: 'relative',
    padding: '10px',
    border: '2px solid var(--color-accent)',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    display: 'block',
    filter: 'grayscale(100%) contrast(1.2)', // Grayscale for dramatic effect
    transition: 'filter 0.3s ease',
  },
  content: {
    textAlign: 'left',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '2rem',
  },
  text: {
    fontSize: '1.1rem',
    color: '#bbb',
    marginBottom: '1.5rem',
    lineHeight: '1.8',
  },
  stats: {
    display: 'flex',
    gap: '3rem',
    marginTop: '3rem',
    borderTop: '1px solid #333',
    paddingTop: '2rem',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'var(--color-accent)',
    fontFamily: 'var(--font-display)',
  },
  statLabel: {
    fontSize: '0.9rem',
    color: '#666',
    textTransform: 'uppercase',
  }
};

export default Intro;
