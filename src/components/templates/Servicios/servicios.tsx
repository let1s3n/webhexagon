import Image from 'next/image';
import styles from './servicios.module.scss';
const Servicios = () => {
  return (
    <section className={styles.introduction}>
      <h1>servicios</h1>
      <Image
        alt="teamwork image"
        src="/images/teamwork.png"
        width={595}
        height={538}
        quality={100}
      />
    </section>
  );
};

export default Servicios;
