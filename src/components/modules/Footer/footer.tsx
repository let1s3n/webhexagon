import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image
        src={`${process.env.NEXT_PUBLIC_CDN}images/logo.png`}
        alt="Hexagon Logo"
        width={53}
        height={60}
      />

      <div className="d-flex" style={{ columnGap: "1rem" }}>
        <div className={styles.icon}>
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN}images/fbIcon.svg`}
            alt="Facebook Icon"
            width={24}
            height={24}
          />
        </div>
        <div className={styles.icon}>
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN}images/igIcon.svg`}
            alt="Instagram Icon"
            width={24}
            height={24}
          />
        </div>
        <div className={styles.icon}>
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN}images/whatsappIcon.svg`}
            alt="Whatsapp Icon"
            width={24}
            height={24}
          />
        </div>
        <div className={styles.icon}>
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN}images/ytIcon.svg`}
            alt="Youtube Icon"
            width={24}
            height={24}
          />
        </div>
      </div>

      <div>
        <ul className="d-flex list-unstyled pt-2 justify-content-center" style={{ columnGap: "32px" }}>
          <li className={styles.listSection}>
            <Link href="/proyectos" className="text-decoration-none text-white">
              Proyectos
            </Link>
          </li>
          <li className={styles.listSection}>
            <Link href="/servicios" className="text-decoration-none text-white">
              Servicios
            </Link>
          </li>
          <li className={styles.listSection}>
            <Link href="/contacto" className="text-decoration-none text-white">
              Contacto
            </Link>
          </li>
        </ul>

        <p className="mt-4">Términos y condiciones | Políticas de privacidad</p>
      </div>

      <p className={styles.text}>
        Copyright © 2023 Hexagon Studio. All rights reserved.
      </p>
      
    </div>
  );
};

export default Footer;
