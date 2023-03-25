import Image from 'next/image';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { bebasNeue } from '../../../lib/fonts';
import styles from './servicios.module.scss';
const Servicios = ({ imageProps }: any) => {
  return (
    <>
      <section className={styles.introduction}>
        <Container className="px-6 px-xxl-12">
          <Row className="text-white pt-8 pb-5">
            <Col xl={7}>
              <h1 className={styles.title}>
                somos un estudio creativo para dar soluciones a tus problemas
              </h1>
            </Col>
            <Col xl={5}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer
                suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus
                aliquet consequat.
              </p>
              <Row className="pt-4">
                <Col>
                  <Button
                    variant="outline-white"
                    className={styles.customButton}
                  >
                    <p className={bebasNeue.className + ' m-0 lh-1'}>
                      Contáctanos
                    </p>
                  </Button>
                </Col>
                <Col></Col>
              </Row>
            </Col>
          </Row>
          <div
            className={
              styles.introductionHero +
              ' position-absolute top-100 start-50 translate-middle my-5'
            }
          >
            <Image
              alt="teamwork image"
              src={imageProps[0].src}
              width={595}
              height={538}
              blurDataURL={imageProps[0].blurDataURL}
              quality={100}
            />
            <div className={styles.backgroundHero}></div>
          </div>
        </Container>

        <div className={styles.circleDashedDecore}></div>
      </section>
      <section className={styles.services}>
        <Container className="px-6 px-xxl-12">
          <Row className="text-white">
            <Col>
              <h1>podemos ayudarte a crear tus sueños.</h1>
            </Col>
            <Col>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer
                suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus
                aliquet consequat.
              </p>
            </Col>
          </Row>
        </Container>

        <div className={styles.circleDecore}></div>
      </section>
    </>
  );
};

export default Servicios;
