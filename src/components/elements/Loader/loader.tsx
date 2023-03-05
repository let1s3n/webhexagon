import React from "react";

import { Image } from "react-bootstrap";
import styles from "./loader.module.scss";

const Loader = (props: any) => {
  return (
    <div
      className={
        props.loading
          ? styles.loader + styles.pulse + " d-flex justify-content-center pt-18"
          : "d-none"
      }
    >
      <Image
        className="logo-loader"
        src={`${process.env.NEXT_PUBLIC_CDN}images/logo2.png`}
        alt="logo loader"
      />
    </div>
  );
};

export default Loader;
