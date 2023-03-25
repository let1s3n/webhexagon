import Image from 'next/image';
import styles from './servicios.module.scss';
const Servicios = ({ imageProps }: any) => {
  return (
    <section className={styles.introduction}>
      <h1>servicios</h1>
      <Image
        alt="teamwork image"
        src={imageProps[0].src}
        width={595}
        height={538}
        blurDataURL={imageProps[0].blurDataURL}
        quality={100}
      />
    </section>
  );
};

export default Servicios;
