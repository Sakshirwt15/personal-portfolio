import React from "react";
import styles from "./Contact.module.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.heading}>Contact Me</h2>
      <p className={styles.subheading}>
        Feel free to connect with me through any platform!
      </p>

      <div className={styles.contactItems}>
        <a
          href="mailto:sakshirawat964@gmail.com"
          className={styles.contactLink}
        >
          <FaEnvelope className={styles.icon} />
          sakshirawat964@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/sakshi-rawat-035321321"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          <FaLinkedin className={styles.icon} />
          linkedin.com/in/sakshi-rawat-035321321
        </a>

        <a
          href="https://www.github.com/sakshirwt15"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          <FaGithub className={styles.icon} />
          github.com/sakshirwt15
        </a>
      </div>
    </section>
  );
};

export default Contact;
