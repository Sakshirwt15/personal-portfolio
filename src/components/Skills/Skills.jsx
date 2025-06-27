import React from "react";
import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Technical Skills</h2>

      <div className={styles.skillGrid}>
        <div className={styles.skillCard}>HTML</div>
        <div className={styles.skillCard}>CSS</div>
        <div className={styles.skillCard}>JavaScript</div>
        <div className={styles.skillCard}>React.js</div>
        <div className={styles.skillCard}>Node.js</div>
        <div className={styles.skillCard}>Express.js</div>
        <div className={styles.skillCard}>MongoDB</div>
        <div className={styles.skillCard}>MySQL</div>
        <div className={styles.skillCard}>C++</div>
        <div className={styles.skillCard}>Python</div>
        <div className={styles.skillCard}>Machine Learning</div>
        <div className={styles.skillCard}>Git & GitHub</div>
      </div>
    </section>
  );
};

export default Skills;
