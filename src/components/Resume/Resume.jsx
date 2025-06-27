import React from "react";
import styles from "./Resume.module.css";

export const Resume = () => {
  return (
    <section className={styles.container} id="resume">
      <h2 className={styles.title}>Resume</h2>
      <p className={styles.subheading}>
        You can view or download my resume using the buttons below.
      </p>

      <div className={styles.resumeButtons}>
        <a
          href="/Finalresume.pdf"
          download
          className={`${styles.resumeBtn} ${styles.downloadBtn}`}
        >
          Download Resume
        </a>
        <a
          href="/Finalresume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.resumeBtn} ${styles.viewBtn}`}
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
