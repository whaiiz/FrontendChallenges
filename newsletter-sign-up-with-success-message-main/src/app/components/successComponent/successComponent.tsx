import styles from './successComponent.module.css';

interface SuccessProps {
  email: string;
  handleDismiss: () => void;
}

export default function Success({ email, handleDismiss }: SuccessProps) {
  return (
    <main className={styles.main}>
      <article className={styles.successContainer}>
        <img className={styles.successIcon} src="./icon-success.svg"></img>
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription.</p>
        <button type="submit" onClick={handleDismiss}>Dismiss message</button>
      </article>
    </main>
  )
}