import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do you train beginners?",
      answer: "Absolutely. I work with clients of all fitness levels, from complete novices to advanced athletes. My programs are customized to your starting point."
    },
    {
      question: "Is meal planning included?",
      answer: "Yes, my 1-on-1 coaching includes full nutritional guidance and custom meal plans. I also offer standalone meal plans if you just need diet help."
    },
    {
      question: "How does online coaching work?",
      answer: "We start with a consultation to set goals. You get access to my app with your workouts and diet. You upload videos, I critique form, and we adjust weekly."
    },
    {
      question: "Can I train at home?",
      answer: "Yes! I can design effective programs based on whatever equipment you have available, even if it's just your bodyweight."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" style={styles.section}>
      <div className="container" style={styles.container}>
        <h2 style={styles.heading}>Common <span className="text-accent">Questions</span></h2>
        <div style={styles.list}>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.item}>
              <div 
                style={styles.question} 
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span style={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div 
                style={{
                  ...styles.answer,
                  maxHeight: activeIndex === index ? '200px' : '0',
                  paddingBottom: activeIndex === index ? '1.5rem' : '0',
                  opacity: activeIndex === index ? 1 : 0,
                }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#0a0a0a',
  },
  container: {
    maxWidth: '800px',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '4rem',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  item: {
    borderBottom: '1px solid #333',
    overflow: 'hidden',
  },
  question: {
    padding: '1.5rem 0',
    fontSize: '1.25rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    transition: 'color 0.3s ease',
  },
  icon: {
    color: 'var(--color-accent)',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  answer: {
    color: '#ccc',
    lineHeight: '1.6',
    transition: 'all 0.3s ease',
  }
};

export default FAQ;
