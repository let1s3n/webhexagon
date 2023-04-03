import Image from 'next/image';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { bebasNeue } from '../../../lib/fonts';
import styles from './servicios.module.scss';
const Servicios = ({ imageProps }: any) => {
  return (
    <>
      <section className={styles.introduction}>
        <Container className="px-6 px-xxl-12">
          <Row className="text-white pt-8 pb-5 g-0">
            <Col xl={7}>
              <h1 className={styles.title}>
                somos un estudio creativo para dar soluciones a tus problemas
              </h1>
            </Col>
            <Col xl={5}>
              <p className="m-0" style={{ maxWidth: '362px' }}>
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
              ' position-absolute top-100 start-50 translate-middle m-0 my-xl-5'
            }
          >
            <Image
              alt="teamwork image"
              src={imageProps[0].src}
              width={595}
              height={0}
              blurDataURL={imageProps[0].blurDataURL}
              quality={100}
              className={styles.teamworkImage}
            />
            <div className={styles.backgroundHero}></div>
          </div>
        </Container>

        <div className={styles.circleDashedDecore}></div>
      </section>

      <section className={styles.services}>
        <Container className="g-0">
          <Row xs={1} className="text-white g-0">
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

          <Row
            className="g-0"
            style={{ marginTop: '80px', columnGap: '1rem', rowGap: '40px' }}
          >
            <Col xs="auto">
              <div
                className={
                  styles.serviceBox + ' ' + styles['serviceBox--first']
                }
              >
                <Image
                  alt="service box 1 illustration"
                  className={styles.serviceBoxIllustration}
                  src={`${process.env.NEXT_PUBLIC_CDN}images/services/webServiceIllustration1.png`}
                  width={200}
                  height={0}
                />
              </div>
            </Col>

            <Col xs="auto">
              <div
                className={
                  styles.serviceBox + ' ' + styles['serviceBox--second']
                }
              >
                <Image
                  alt="service box 1 illustration"
                  className={styles.serviceBoxIllustration}
                  src={`${process.env.NEXT_PUBLIC_CDN}images/services/webServiceIllustration2.png`}
                  width={200}
                  height={0}
                />
              </div>
            </Col>

            <Col xs="auto">
              <div className={styles.serviceBox}>
                <Image
                  alt="service box 1 illustration"
                  className={styles.serviceBoxIllustration}
                  src={`${process.env.NEXT_PUBLIC_CDN}images/services/webServiceIllustration3.png`}
                  width={200}
                  height={0}
                />
              </div>
            </Col>

            <Col xs="auto">
              <div className={styles.serviceBox}>
                <Image
                  alt="service box 1 illustration"
                  className={styles.serviceBoxIllustration}
                  src={`${process.env.NEXT_PUBLIC_CDN}images/services/webServiceIllustration4.png`}
                  width={200}
                  height={0}
                />
              </div>
            </Col>
          </Row>
        </Container>

        <div className={styles.circleDecore}></div>
      </section>
    </>
  );
};

export default Servicios;
