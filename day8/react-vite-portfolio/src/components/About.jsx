import styles from "./About.module.css"

function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.contentBox}>
          <ul className={styles.skillList}>
            <li><span className={styles.label}>[EDU]</span> B.Sc Computer Science</li>
            <li><span className={styles.label}>[SKILLS]</span> HTML, CSS, JavaScript, React</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About