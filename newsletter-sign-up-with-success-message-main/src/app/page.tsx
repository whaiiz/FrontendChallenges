'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Success from './components/successComponent/successComponent';

export default function Home() {

  const [email, setEmail] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event : React.FocusEvent<HTMLFormElement>) => {+
    event.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!regex.test(email)) {
      setShowEmailError(true);
    } else {
      setShowSuccess(true);
    }
  }

  const handleDismiss = () => {
    setShowSuccess(false);
    setEmail("");
  }

  return (
    showSuccess ? 
    <Success
      handleDismiss={handleDismiss}
      email={email}
    /> : 
    <main className={styles.main}>
      <article className={styles.subscribeNewsletter}>
        <img className={styles.desktopImage} src="./illustration-sign-up-desktop.svg" />
        <img className={styles.mobileImage} src="./illustration-sign-up-mobile.svg" />
        <section className={styles.subscribeNewsletterFormContainer}>
          <h1>Stay updated!</h1>
          <p className={styles.subscribeNewsletterText}>Join 60,000 + products managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are success</li>
            <li>And much more!</li>
          </ul>
          <form onSubmit={handleSubmit}>
            <div className={styles.emailContainer}>
              <label>Email address</label>
              { showEmailError && <span className="errorMessage">Valid email required</span> }
              <input 
                type="text" 
                className={showEmailError ? "inputError" : ""} 
                placeholder="email@company.com" 
                onBlur={event => setEmail(event.target.value)} 
                onChange={() => setShowEmailError(false)} />
            </div>
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </section>
      </article>
    </main>
  )
}
