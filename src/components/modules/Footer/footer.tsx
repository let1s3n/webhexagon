import React from "react";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className="lh-1">
        Desarrollado por{" "}
        <a target="_blank">
          <strong>Hexagon Studio</strong>
        </a>
      </p>
    </div>
  );
};

export default Footer;
