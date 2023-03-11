import Image from 'next/image';
import Link from 'next/link';

import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styles from './home.module.scss';

const Home = ({ imageProps }: any) => {
  return (
    <>
      <section className={styles.introduction}>
        <Container
          className="g-0 d-flex flex-column flex-xl-row p-3 px-xxl-10 pt-xxl-9 justify-content-between align-items-center align-items-xl-stretch"
          style={{ rowGap: '1.5rem' }}
        >
          <div className={styles.imageContainer}>
            <Image
              /* src={`${process.env.NEXT_PUBLIC_CDN}images/home/illustrationHome1.png`} */
              src={imageProps[0].src}
              alt="Illustration Home 1"
              fill
              style={{ objectFit: 'contain' }}
              priority
              sizes="1492px"
              placeholder="blur"
              blurDataURL={imageProps[0].blurDataURL}
              quality={100}
            />
          </div>
          <div className={styles.right}>
            <div>
              <h1
                className={
                  styles.title + ' text-white pb-3 text-center text-xl-end'
                }
              >
                Lorem ipsum dolor sit amet
              </h1>
              <h1
                className={styles.title + ' text-white text-center text-xl-end'}
              >
                Lorem ipsum
              </h1>
            </div>
            <div className={styles.textContainer}>
              <p className="text-white pb-3 text-center text-xl-end">
                Lorem ipsum dolor sit amet consectetur. Congue dis et mattis eu.
                Felis ipsum elit nunc sit mollis orci vestibulum. Turpis
                malesuada dui ut nisi et rutrum fermentum mattis.
              </p>
              <p className="text-white text-center text-xl-end">
                Morbi ac consequat eu lobortis sed vel. Eu feugiat nibh
                vulputate congue mattis tristique. Urna dictumst est viverra
                lacus dictumst tristique ut maecenas. Integer ac tristique
                sapien dignissim
              </p>
            </div>
            <div
              className={styles.customButtonContainer + ' position-relative'}
            >
              <Link href="/contacto" passHref>
                <Button variant="link" className={styles.customButton}>
                  CONTACTAR AHORA
                </Button>
              </Link>
              <div className={styles.buttonDecoration}></div>
            </div>
          </div>
        </Container>

        <div
          className={
            styles.infoBox +
            ' position-absolute top-100 start-50 translate-middle text-white'
          }
        >
          <h4 className="fs-6 fs-xl-4 mb-3">
            ¡NOSOTROS PODEMOS <span className="text-terciary">AYUDARTE</span> A
            LOGRARLO!
          </h4>

          <p
            className="d-none d-xl-block fs-14 mb-4"
            style={{ maxWidth: '362px' }}
          >
            Nos apasiona ayudar a las marcas con propósito a ganar en Internet y
            aumentar su impacto positivo.
          </p>

          <Button variant="outline-white" className={styles.customButton}>
            VER SERVICIOS
          </Button>

          <Image
            /* src={`${process.env.NEXT_PUBLIC_CDN}images/home/cubosHome.png`} */
            src={imageProps[1].src}
            alt="Cubos Home"
            width={277}
            height={0}
            className="position-absolute d-none d-xl-block"
            style={{ top: '-33px', right: '109px', height: 'auto' }}
            placeholder="blur"
            blurDataURL={imageProps[1].blurDataURL}
            quality={100}
          />
        </div>
      </section>

      <section className={styles.proyects}>
        <Container className="g-0 mx-auto" style={{ width: 'fit-content' }}>
          <div
            className="d-flex flex-column align-items-center align-items-xl-stretch flex-xl-row justify-content-between"
            style={{ rowGap: '1rem' }}
          >
            <div className="position-relative" style={{ width: 'fit-content' }}>
              <h1 className={styles.title}>PROYECTOS DESTACADOS</h1>
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN}images/general/titleDecore.svg`}
                alt="Title Decore"
                width={216}
                height={0}
                className={styles.titleDecore}
              />
            </div>

            <Link href="/proyectos" passHref style={{ zIndex: '2' }}>
              <Button
                variant="black"
                className={
                  styles.customButton + ' border-white border-2 rounded-0'
                }
              >
                <p className={styles.innerText}>VER PROYECTOS</p>
              </Button>
            </Link>
          </div>

          <div
            className="d-flex flex-column mt-8 align-items-center align-items-xxl-stretch"
            style={{ rowGap: '48px' }}
          >
            <div className={styles.proyect}>
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN}images/home/proyects/proyectoHome1.png`}
                alt="Proyecto Home 1"
                width={362}
                height={0}
                className={styles.imgProyect}
                style={{ height: 'auto' }}
              />

              <div className={styles.right}>
                <div className="d-flex" style={{ columnGap: '12px' }}>
                  <div className={styles.tag}>
                    <p className="lh-1">WEB</p>
                  </div>
                  <div className={styles.tag}>
                    <p className="lh-1">IOS</p>
                  </div>
                  <div className={styles.tag}>
                    <p className="lh-1">Android</p>
                  </div>
                </div>

                <h3 className="pt-2">DUNDER MIFFLIN</h3>

                <p className={styles.proyectDescription}>
                  Nos apasiona ayudar a las marcas con propósito a ganar en
                  Internet y aumentar su impacto positivo.
                </p>

                <div
                  className="d-flex align-items-center"
                  style={{ columnGap: '1rem', paddingTop: '27px' }}
                >
                  <p className="lh-1">Ir al proyecto</p>
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
            <div className={styles.proyect}>
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN}images/home/proyects/proyectoHome2.png`}
                alt="Proyecto Home 2"
                width={362}
                height={0}
                className={styles.imgProyect}
                style={{ height: 'auto' }}
              />

              <div className={styles.right}>
                <div className="d-flex" style={{ columnGap: '12px' }}>
                  <div className={styles.tag}>
                    <p className="lh-1">WEB</p>
                  </div>
                  <div className={styles.tag}>
                    <p className="lh-1">IOS</p>
                  </div>
                  <div className={styles.tag}>
                    <p className="lh-1">Android</p>
                  </div>
                </div>

                <h3 className="pt-2">DUNDER MIFFLIN</h3>

                <p className={styles.proyectDescription}>
                  Nos apasiona ayudar a las marcas con propósito a ganar en
                  Internet y aumentar su impacto positivo.
                </p>

                <div
                  className="d-flex align-items-center"
                  style={{ columnGap: '1rem', paddingTop: '27px' }}
                >
                  <p className="lh-1">Ir al proyecto</p>
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
            <div className={styles.proyect}>
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN}images/home/proyects/proyectoHome3.png`}
                alt="Proyecto Home 3"
                width={362}
                height={0}
                className={styles.imgProyect}
                style={{ height: 'auto' }}
              />

              <div className={styles.right}>
                <div className="d-flex" style={{ columnGap: '12px' }}>
                  <div className={styles.tag}>
                    <p className="lh-1">WEB</p>
                  </div>
                  <div className={styles.tag}>
                    <p className="lh-1">IOS</p>
                  </div>
                  <div className={styles.tag}>
                    <p className="lh-1">Android</p>
                  </div>
                </div>

                <h3 className="pt-2">DUNDER MIFFLIN</h3>

                <p className={styles.proyectDescription}>
                  Nos apasiona ayudar a las marcas con propósito a ganar en
                  Internet y aumentar su impacto positivo.
                </p>

                <div
                  className="d-flex align-items-center"
                  style={{ columnGap: '1rem', paddingTop: '27px' }}
                >
                  <p className="lh-1">Ir al proyecto</p>
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
        </Container>

        <div className={styles.circleDecore}></div>
      </section>

      <section className={styles.contact}>
        <div className={styles.main}>
          <Container className="g-0 text-white text-center">
            <h2>¿TODO LISTO PARA EMPEZAR?</h2>
            <p>Dejanos un mensaje y te contactaremos lo más pronto posible.</p>

            <Form className={styles.customForm}>
              <Row
                className="g-0 mb-5"
                style={{
                  marginBottom: '36px',
                  columnGap: '1.5rem',
                  rowGap: '1.5rem',
                }}
              >
                <Col xs={12} xl="auto" className="position-relative">
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control type="text" placeholder="Nombre completo" />
                </Col>

                <Col xs={12} xl="auto" className="position-relative">
                  <Form.Label>Company</Form.Label>
                  <Form.Control type="text" placeholder="Company" />
                </Col>

                <Col xs={12} xl="auto" className="position-relative">
                  <Form.Label>Correo eléctronico</Form.Label>
                  <Form.Control type="email" placeholder="Correo eléctronico" />
                </Col>

                <Col xs={12} xl="auto" className="position-relative">
                  <Form.Label>Número de contacto</Form.Label>
                  <Form.Control type="text" placeholder="Número de contacto" />
                </Col>

                <Col xs={12} className="position-relative">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Mensaje"
                    style={{ height: '126px' }}
                  />
                </Col>
              </Row>

              <div
                className={styles.customButtonContainer + ' position-relative'}
              >
                {/* <Link href="/contacto" passHref> */}
                <Button
                  type="submit"
                  variant="link"
                  className={styles.customButton}
                >
                  ENVIAR AHORA
                </Button>
                {/* </Link> */}
                <div className={styles.buttonDecoration}></div>
              </div>
            </Form>
          </Container>
        </div>
        <div className={styles.outsideClip}></div>
      </section>
    </>
  );
};

export default Home;
