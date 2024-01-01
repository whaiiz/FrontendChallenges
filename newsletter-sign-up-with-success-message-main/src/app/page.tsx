import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <article>
      <section>
        <h1>Stay Updated</h1>
        <p>Join 60,000 + products managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are success</li>
          <li>And much more!</li>
        </ul>
        <label>Email address</label>
        <input type="text" placeholder="email@company.com" />
        <button>Subscribe to monthly newsletter</button>
      </section>
      <img src="./illustration-sign-up-desktop.svg" />
    </article>
    </main>
  )
}
