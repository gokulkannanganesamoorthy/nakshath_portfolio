import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Nakshath Fitness Portfolio</h1>
      <p style={styles.subtitle}>Select a Design Experience</p>
      
      <div style={styles.grid}>
        <Link to="/design1" style={styles.card}>
          <div style={styles.cardContent}>
            <h2>Design 1</h2>
            <p>Minimal, Clean & Catchy</p>
          </div>
        </Link>
        
        <Link to="/design2" style={styles.card}>
          <div style={styles.cardContent}>
            <h2>Design 2</h2>
            <p>Modern Titan</p>
          </div>
        </Link>

        <Link to="/design3" style={{...styles.card, borderColor: '#fff'}}>
          <div style={styles.cardContent}>
            <h2>Design 3</h2>
            <p>Noir Luxury</p>
          </div>
        </Link>

        <Link to="/design4" style={{...styles.card, borderColor: '#FFD700'}}>
          <div style={styles.cardContent}>
            <h2>Design 4</h2>
            <p>Elite Performance</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#050505',
    color: '#fff',
    fontFamily: '"Inter", sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  subtitle: {
    color: '#888',
    marginBottom: '3rem',
    fontSize: '1.2rem',
  },
  grid: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: '300px',
    height: '200px',
    backgroundColor: '#111',
    border: '1px solid #333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: '#fff',
    transition: 'all 0.3s ease',
    borderRadius: '12px',
  },
  cardContent: {
    textAlign: 'center',
  }
};

export default Home;
