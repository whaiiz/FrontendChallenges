import styles from './page.module.css'

export default function Home() {
  return (
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
        <form>          
          <label>Email address</label>
          <input type="text" placeholder="email@company.com" />
          <button>Subscribe to monthly newsletter</button>
        </form>
      </section>
    </article>
  )
}
