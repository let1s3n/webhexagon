import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { bebasNeue } from '../../../lib/fonts';
import styles from './servicios.module.scss';
const Servicios = ({ imageProps }: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <>
      <section className={styles.introduction}>
        <Container className="px-6 px-xxl-12">
          <Row className="text-white p-0 g-0">
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
              ' position-absolute top-100 top-md-90 top-xl-100 start-50 translate-middle m-0'
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
            <div
              className={styles.backgroundHero + ' start-50 translate-middle-x'}
            ></div>
          </div>
        </Container>

        <div className={styles.circleDashedDecore}></div>
      </section>

      <section className={styles.services}>
        <Container className="g-0">
          <Row xs={1} className="text-white g-0" style={{ rowGap: '1rem' }}>
            <Col>
              <h1 className="text-center">
                Podemos ayudarte a crear tus sueños.
              </h1>
            </Col>
            <Col>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer
                suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus
                aliquet consequat.
              </p>
            </Col>
          </Row>

          <Row
            className={
              styles.services__cardsContainer + ' g-0 justify-content-center'
            }
          >
            <Col xs="auto">
              <div
                className={styles.serviceBox + ' ' + styles['serviceBox--odd']}
              >
                <Image
                  alt="service box 1 illustration"
                  className={styles.serviceBoxIllustration}
                  src={`${process.env.NEXT_PUBLIC_CDN}images/services/webServiceIllustration1.png`}
                  width={200}
                  height={0}
                />
                <div className="text-white pt-6 pb-5 px-4">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/desarrolloWebIcon.svg`}
                    alt="web development"
                    width={40}
                    height={0}
                    style={{ height: 'auto' }}
                  />
                  <h4 className="pt-4">DESARROLLO WEB</h4>
                  <p className="w-75 pt-2">
                    Lorem ipsum dolor sit amet consectetur. Tortor gravida
                    convallis aliquet suspendisse quam placerat purus sit.
                  </p>
                  <div className="position-relative mt-5 d-flex flex-column justify-content-center">
                    <p
                      style={{
                        height: 50 + 'px',
                        width: 50 + 'px',
                      }}
                      className="position-absolute opacity-25 border border-white rounded-circle"
                    ></p>
                    <div className="d-flex gap-3 align-items-center ps-3">
                      <p>Ver proyectos web</p>
                      <Link href="/" passHref style={{ lineHeight: '12px' }}>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CDN}images/general/arrow.png`}
                          alt="Arrow"
                          width={39}
                          height={0}
                          style={{ height: 'auto' }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs="auto">
              <div
                className={styles.serviceBox + ' ' + styles['serviceBox--even']}
              >
                <Image
                  alt="service box 1 illustration"
                  className={styles.serviceBoxIllustration}
                  src={`${process.env.NEXT_PUBLIC_CDN}images/services/webServiceIllustration2.png`}
                  width={200}
                  height={0}
                />
                <div className="text-white pt-6 pb-5 px-4">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/desarrolloAplicacionesIcon.svg`}
                    alt="web development"
                    width={40}
                    height={0}
                    style={{ height: 'auto' }}
                  />
                  <h4 className="pt-4">DESARROLLO DE APLICACIONES</h4>
                  <p className="w-75 pt-2">
                    Lorem ipsum dolor sit amet consectetur. Tortor gravida
                    convallis aliquet suspendisse quam placerat purus sit.
                  </p>
                  <div className="position-relative mt-5 d-flex flex-column justify-content-center">
                    <p
                      style={{
                        height: 50 + 'px',
                        width: 50 + 'px',
                      }}
                      className="position-absolute opacity-25 border border-white rounded-circle"
                    ></p>
                    <div className="d-flex gap-3 align-items-center ps-3">
                      <p>Ver proyectos App</p>
                      <Link href="/" passHref style={{ lineHeight: '12px' }}>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CDN}images/general/arrow.png`}
                          alt="Arrow"
                          width={39}
                          height={0}
                          style={{ height: 'auto' }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs="auto">
              <div
                className={
                  styles.serviceBoxDown +
                  ' ' +
                  styles['serviceBoxDown--odd-down']
                }
              >
                <Image
                  alt="service box 1 illustration"
                  className={styles.serviceBoxIllustration}
                  src={`${process.env.NEXT_PUBLIC_CDN}images/services/webServiceIllustration3.png`}
                  width={200}
                  height={0}
                />
                <div className="text-white pt-4 pb-5 px-4">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/desarrolloSoftwareIcon.svg`}
                    alt="web development"
                    width={40}
                    height={0}
                    style={{ height: 'auto' }}
                  />
                  <h4 className="pt-4">DESARROLLO DE SOFTWARE</h4>
                  <p className="w-75 pt-2">
                    Lorem ipsum dolor sit amet consectetur. Tortor gravida
                    convallis aliquet suspendisse quam placerat purus sit.
                  </p>
                  <div className="position-relative mt-5 d-flex flex-column justify-content-center">
                    <p
                      style={{
                        height: 50 + 'px',
                        width: 50 + 'px',
                      }}
                      className="position-absolute opacity-25 border border-white rounded-circle"
                    ></p>
                    <div className="d-flex gap-3 align-items-center ps-3">
                      <p>Ver proyectos Software</p>
                      <Link href="/" passHref style={{ lineHeight: '12px' }}>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CDN}images/general/arrow.png`}
                          alt="Arrow"
                          width={39}
                          height={0}
                          style={{ height: 'auto' }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs="auto">
              <div
                className={
                  styles.serviceBoxDown +
                  ' ' +
                  styles['serviceBoxDown--even-down']
                }
              >
                <Image
                  alt="service box 1 illustration"
                  className={styles.serviceBoxIllustration}
                  src={`${process.env.NEXT_PUBLIC_CDN}images/services/webServiceIllustration4.png`}
                  width={200}
                  height={0}
                />
                <div className="text-white pt-4 pb-5 px-4">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/redesSocialesIcon.svg`}
                    alt="web development"
                    width={40}
                    height={0}
                    style={{ height: 'auto' }}
                  />
                  <h4 className="pt-4">REDES SOCIALES</h4>
                  <p className="w-75 pt-2">
                    Lorem ipsum dolor sit amet consectetur. Tortor gravida
                    convallis aliquet suspendisse quam placerat purus sit.
                  </p>
                  <div className="position-relative mt-5 d-flex flex-column justify-content-center">
                    <p
                      style={{
                        height: 50 + 'px',
                        width: 50 + 'px',
                      }}
                      className="position-absolute opacity-25 border border-white rounded-circle"
                    ></p>
                    <div className="d-flex gap-3 align-items-center ps-3">
                      <p>Ver proyectos Redes sociales</p>
                      <Link href="/" passHref style={{ lineHeight: '12px' }}>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CDN}images/general/arrow.png`}
                          alt="Arrow"
                          width={39}
                          height={0}
                          style={{ height: 'auto' }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
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
