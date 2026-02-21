import { useState } from "react"
import styles from "./Contact.module.css"

function Contact() {
  const [message, setMessage] = useState("")

  const handleClick = () => {
    setMessage("Thank you for contacting me! I will respond soon.")
  }

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Contact Me</h2>

      <div className={styles.contactInfo}>
        <p><strong>Email:</strong> saranyasegar345@gmail.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
      </div>

      <button className="cyber-button" onClick={handleClick}>Send Message</button>

      {message && <div className={styles.message}>{message}</div>}
    </section>
  )
}

export default Contact