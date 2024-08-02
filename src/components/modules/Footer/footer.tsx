import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.scss';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image
        src={`${process.env.NEXT_PUBLIC_CDN}images/general/logo2.png`}
        alt="Hexagon Logo"
        width={53}
        height={0}
        sizes="(max-width: 768px) 40px, 53px"
        className={styles.footerLogo}
        quality={100}
      />

      <div className="d-flex" style={{ columnGap: '1rem' }}>
        <div className={styles.icon + ' ' + styles['icon--fb']}>
          <Link
            href="https://www.facebook.com/HexagonStudioPeru"
            target="_blank"
            className="text-decoration-none text-white"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/social/fbIcon.svg`}
              alt="Facebook Icon"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div className={styles.icon + ' ' + styles['icon--ig']}>
          <Link
            href="https://www.instagram.com/hexagonstudio_peru"
            target="_blank"
            className="text-decoration-none text-white"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/social/igIcon.svg`}
              alt="Instagram Icon"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div className={styles.icon + ' ' + styles['icon--ws']}>
          <Link
            href="https://api.whatsapp.com/send?phone=927575917"
            target="_blank"
            className="text-decoration-none text-white"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/social/whatsappIcon.svg`}
              alt="Whatsapp Icon"
              width={24}
              height={24}
            />
          </Link>
        </div>
        {/* <div className={styles.icon + ' ' + styles['icon--yt']}>
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/social/ytIcon.svg`}
            alt="Youtube Icon"
            width={24}
            height={24}
          />
        </div> */}
      </div>

      <div>
        <ul
          className="d-flex list-unstyled pt-2 justify-content-center"
          style={{ columnGap: '32px' }}
        >
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
        Copyright © 2024 Hexagon Studio. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
