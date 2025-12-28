import React from 'react';

const Services = () => {
  const services = [
    {
      title: "1-on-1 Online Coaching",
      description: "Personalized training tailored to your specific goals and lifestyle. Weekly check-ins and form analysis.",
      price: "From \u20B92999/mo"
    },
    {
      title: "Custom Meal Plans",
      description: "Fuel your gains with nutrition plans designed for your body type. No boring diets, just results.",
      price: "\u20B91499"
    },
    {
      title: "Hypertrophy Program",
      description: "A 12-week intensive program focused purely on muscle growth and aesthetic sculpting.",
      price: "\u20B91999"
    }
  ];

  return (
    <section id="services" style={styles.section}>
      <div className="container">
        <h2 style={styles.heading}>My <span className="text-accent">Programs</span></h2>
        <div style={styles.grid}>
          {services.map((service, index) => (
            <div key={index} style={styles.card} className="service-card">
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardDesc}>{service.description}</p>
              <div style={styles.price}>{service.price}</div>
              <button style={styles.button}>Select Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#0f0f0f',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '4rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#1a1a1a',
    padding: '2rem',
    borderRadius: '0', 
    border: '1px solid #333',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#fff',
  },
  cardDesc: {
    color: '#aaa',
    marginBottom: '2rem',
    flexGrow: 1,
  },
  price: {
    fontSize: '1.25rem',
    fontFamily: 'var(--font-display)',
    color: 'var(--color-accent)',
    marginBottom: '1.5rem',
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    padding: '1rem',
    backgroundColor: 'transparent',
    border: '1px solid var(--color-accent)',
    color: 'var(--color-accent)',
    marginTop: 'auto',
  }
};

export default Services;
