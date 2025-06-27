import React from "react";
import styles from "./Certification.module.css";

export const Certification = () => {
  return (
    <section className={styles.container} id="Certifications">
      <h2 className={styles.title}>Certification</h2>
      <div className={styles.certList}>
        <div className={styles.certItem}>
          <h3>Web Development with MERN STACK- Udemy</h3>
          <p>Issued by Udemy</p>
          <a
            href="https://www.udemy.com/certificate/UC-1e780771-9bd5-4b56-bd8b-082e695fd218/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.certLink}
          >
            View Certificate
          </a>
        </div>

        <div className={styles.certItem}>
          <h3>Cybersecurity analyst Job Simulation</h3>
          <p>Issued by Tata Group(Forage)</p>
          <a
            href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_n4ig4NhAd2Ke87n2X_1737826638194_completion_certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.certLink}
          >
            View Certificate
          </a>
        </div>

        <div className={styles.certItem}>
          <h3>AWS Cloud Practitioner Essentials</h3>
          <p>Issued by AWS</p>
          <a
            href="blob:https://skillbuilder.aws/c8a9ce28-370f-4480-8aed-c98d29151b5d"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.certLink}
          >
            View Certificate
          </a>
        </div>

        <div className={styles.certItem}>
          <h3>Computer Vision Course</h3>
          <p>Issued by Infosys Springboard</p>
          <a
            href="https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012952007096016896334_shared/overview"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.certLink}
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certification;
