import { useState } from "react"
import styles from "./Home.module.css"

function Home() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <section className={styles.homeSection}>
      <h1 className={styles.glitchTitle}>
        SARANYA
      </h1>
      <h3 className={styles.subtitle}>
        Frontend Developer
      </h3>

      {showIntro && (
        <div className={styles.introText}>
          <p>
            I architect modern web interfaces and digital ecosystems using React and JavaScript.
          </p>
        </div>
      )}

      <button className="cyber-button" onClick={() => setShowIntro(!showIntro)}>
        {showIntro ? "Hide Protocols" : "Execute Intro"}
      </button>
    </section>
  )
}

export default Home