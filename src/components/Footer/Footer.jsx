import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footerMainContainer}>
        <div className={styles.qualitySolution}>
          <p>A high-quality solution for a beautiful startup website.</p>
        </div>
        <div className={styles.startups}>
          <p>
            Startups can save money on design and code and use those savings to
            develop the business.
          </p>
        </div>
        <div className={styles.startupFrameworks}>
          <p>
            Startup Framework includes great form options for your startup
            projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
