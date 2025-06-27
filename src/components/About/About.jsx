import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack developer</h3>
              <p>
                I'm a Full Stack Developer skilled in building complete web
                applications with frontend and backend integration. I'm familiar
                with technologies like React, Node.js, Express, and MongoDB.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem Solving Skills</h3>
              <p>
                I enjoy tackling complex problems through logical thinking and
                efficient algorithms. Regularly practice on platforms like
                LeetCode to strengthen my data structures and coding skills.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning</h3>
              <p>
                Throughout my academic journey, I developed a strong interest in
                machine learning and data-driven solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
