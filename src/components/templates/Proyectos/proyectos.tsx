import Image from 'next/image';
import { Container } from 'react-bootstrap';

import CardWithUs from '@/components/modules/CardWithUs/cardWithUs';
import Tabs from '../../modules/Tabs/tabs';
import styles from './proyectos.module.scss';
const Proyectos = () => {
  return (
    <div className={styles.commonContainer}>
      <section className={styles.introduction}>
        <Container className="g-0">
          <div className="px-5 px-lg-0">
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

        <div className={styles.outerCircle + ' d-none d-lg-block'}>
          <div className={styles.innerCircle}></div>
        </div>
      </section>

      <section className={styles.projects}>
        <Container className="g-0 px-3 px-lg-0">
          <Tabs />
        </Container>
      </section>

      <section className="pb-8 mx-2 mx-md-5 mx-lg-10 mx-xl-0">
        <CardWithUs />
      </section>
    </div>
  );
};

export default Proyectos;
