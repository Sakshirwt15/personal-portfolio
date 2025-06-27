import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sakshi Rawat</h1>
        <p className={styles.description}>
          I'm a final-year B.Tech Computer Science student passionate about
          coding, web development, and data science. I love building real-world
          projects and solving problems through tech. Currently, I’m looking for
          opportunities to apply my skills and grow as a software developer.
        </p>
        <a href="mailto:sakshirawat964@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
