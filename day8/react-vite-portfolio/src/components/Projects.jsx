import { useState } from "react"
import styles from "./Projects.module.css"

function Projects() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>Codetraxora</h3>
            <span className={styles.statusInfo}>[ACTIVE]</span>
          </div>
          {showMore && <p className={styles.cardDesc}>A Offline code generative tool for automizations.</p>}
          <button className="cyber-button" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Collapse Data" : "Expand Data"}
          </button>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>Mario game</h3>
            <span className={styles.statusInfo}>[SYNCING]</span>
          </div>
          <p className={styles.cardDesc}>A simple python mario game.</p>
          <button className="cyber-button">Initialize</button>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>Portfolio Website</h3>
            <span className={styles.statusInfo}>[ONLINE]</span>
          </div>
          <p className={styles.cardDesc}>Personal cyber-interface built using React.</p>
          <button className="cyber-button">Initialize</button>
        </div>
      </div>
    </section>
  )
}

export default Projects