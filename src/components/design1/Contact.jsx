import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // TODO: User needs to insert their own access key here
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.heading}>Start Your <span className="text-accent">Transformation</span></h2>
          <p>Ready to level up? Fill out the form below.</p>
        </div>

        <form onSubmit={onSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <input type="text" name="name" placeholder="Your Name" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <input type="email" name="email" placeholder="Your Email" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <textarea name="message" placeholder="Tell me about your goals..." required rows="5" style={styles.textarea}></textarea>
          </div>
          
          <button type="submit" style={styles.button}>Send Request</button>
        </form>
        <span style={styles.result}>{result}</span>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#111',
    padding: '6rem 2rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  input: {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#0a0a0a',
    border: '1px solid #333',
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'var(--font-main)',
    outline: 'none',
  },
  textarea: {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#0a0a0a',
    border: '1px solid #333',
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'var(--font-main)',
    outline: 'none',
    resize: 'vertical',
  },
  button: {
    padding: '1rem',
    backgroundColor: 'var(--color-accent)',
    color: '#000',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  result: {
    display: 'block',
    textAlign: 'center',
    marginTop: '1.5rem',
    color: 'var(--color-accent)',
  }
};

export default Contact;
