import Image from 'next/image';
import { Container } from 'react-bootstrap';

import Tabs from '../../modules/Tabs/tabs';
import styles from './proyectos.module.scss';
const Proyectos = () => {
  return (
    <div className={styles.commonContainer}>
      <section className={styles.introduction}>
        <Container className="g-0">
          <div>
            <h1 className={styles.title}>
              FÁCIL DE ENTENDER. <br />● IMPOSIBLE DE IGNORAR.
            </h1>
            <div className={styles.presentationTextContainer}>
              <p className={styles.presentationText + ' mb-0 text-white'}>
                Hexagon Studio es una agencia de servicios integrales que se
                dedica a diseñar y crear productos, marcas y experiencias
                digitales de gran belleza.
              </p>
              <div className={styles.dot}></div>
            </div>
          </div>
          <Image
            alt="project 1 illustration"
            src={`${process.env.NEXT_PUBLIC_CDN}images/projects/mock/illustrationProject1.png`}
            width={442}
            height={492}
            className={styles.projectIllustration}
          />
        </Container>

        <div className={styles.outerCircle}>
          <div className={styles.innerCircle}></div>
        </div>
      </section>

      <section className={styles.projects}>
        <Container className="g-0">
          <Tabs />
        </Container>
      </section>
    </div>
  );
};

export default Proyectos;
