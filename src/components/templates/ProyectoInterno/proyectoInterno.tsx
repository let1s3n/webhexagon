import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './proyectoInterno.module.scss';
const ProyectoInterno = () => {
  return (
    <>
      <section className={styles.introduction}>
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN}images/home/projects/web/showcaseLUSITANO2.png`}
          alt="Proyecto Home 4"
          width={400}
          height={0}
          style={{
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            top: 0,
            zIndex: -1,
          }}
        />
        <Container className="px-6 px-xxl-12 position-relative">
          <Row className="text-white p-0 g-0">
            <Col xl={7}>
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/hexagon-logo-name.png`}
                alt="logo"
                width={200}
                height={0}
                style={{ height: 'auto' }}
              />
              <p className="pt-4 pb-3">Marketing, ecommerce, website.</p>
              <h1 className={styles.title}>OUTER HEAVEN</h1>
              <h2>2023</h2>
            </Col>
            <Col xl={5}>
              <Row className="pt-4">
                <Col xs="auto" lg={4} xl={6}>
                  <div className="position-relative d-flex flex-column justify-content-center">
                    <p
                      style={{
                        height: 50 + 'px',
                        width: 50 + 'px',
                        right: 0,
                      }}
                      className="position-absolute opacity-25 border border-white rounded-circle"
                    ></p>
                    <div className="d-flex gap-3 align-items-center pe-3 justify-content-end">
                      <Link href="/" passHref style={{ lineHeight: '12px' }}>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CDN}images/general/arrow.png`}
                          alt="Arrow"
                          width={39}
                          height={0}
                          style={{
                            height: 'auto',
                            transform: 'rotateY(180deg)',
                          }}
                        />
                      </Link>
                      <p>Atrás</p>
                    </div>
                  </div>
                </Col>
                <Col
                  xs="auto"
                  lg={4}
                  xl={6}
                  className="d-flex justify-content-center d-none d-md-flex"
                >
                  <div className="position-relative d-flex flex-column justify-content-center">
                    <p
                      style={{
                        height: 50 + 'px',
                        width: 50 + 'px',
                      }}
                      className="position-absolute opacity-25 border border-white rounded-circle"
                    ></p>
                    <div className="d-flex gap-3 align-items-center ps-3">
                      <p>Siguiente proyecto</p>
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
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div
          className="position-absolute w-100 text-center"
          style={{ bottom: '20px' }}
        >
          <p className="text-white">Acerca del proyecto</p>
          <div
            className="d-flex justify-content-center"
            style={{ height: '50px' }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/arrow-double-down.svg`}
              alt="double arrow"
              width={24}
              height={24}
              className={styles.arrowDouble}
            />
          </div>
        </div>
        <div className={styles.circleDashedDecore}></div>
      </section>
      <section className={styles.projectInfo}>
        <Container>
          <Row className="py-8 border-bottom">
            <Col className="px-7">
              <div className="position-relative d-flex flex-column justify-content-center">
                <p
                  style={{
                    height: 50 + 'px',
                    width: 50 + 'px',
                  }}
                  className="position-absolute opacity-25 border border-white rounded-circle"
                ></p>
                <div className="d-flex gap-3 align-items-center ps-3">
                  <p>Visitar sitio web</p>
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
              <h2 className="pt-5 w-75">
                Diseñamos una herramienta para respaldar un gran éxito y una
                marca para recordar
              </h2>
              <div className="pt-5">
                <p className="border-bottom lh-lg">Servicios proporcionados</p>
                <Row className="py-3">
                  {[
                    'Research & Strategy',
                    'Retail',
                    'Brand Identity',
                    'Digital Design',
                    'Packaging',
                  ].map((el, i) => {
                    return (
                      <Col xs={6} key={i}>
                        <p className="pb-3">{el}</p>
                      </Col>
                    );
                  })}
                </Row>
              </div>
              <div className="py-5">
                <p className="border-bottom lh-lg">Tecnologías usadas</p>
                <Row className="py-3">
                  {['Android', 'Tec.2', 'AWS', 'HTML5'].map((el, i) => {
                    return (
                      <Col xs={6} key={i}>
                        <p className="pb-3">{el}</p>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Col>
            <Col className="px-7">
              <div>Test</div>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer
                suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus
                aliquet consequat nunc dui sed lorem. Placerat felis gravida
                quam iaculis euismod neque in. Risus suscipit mattis id
                ultricies eu nec felis. Ornare varius velit purus vulputate in
                cursus erat.
              </p>
              <div>
                <h2 className="pb-4">Historia</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ipsum vulputate
                  integer suspendisse ut suspendisse dignissim sit mauris.
                  Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat
                  felis gravida quam iaculis euismod neque in. Risus suscipit
                  mattis id ultricies eu nec felis. Ornare varius velit purus
                  vulputate in cursus erat.
                </p>
                <p className="pt-3">
                  Mollis aliquet eget aenean praesent velit ullamcorper nulla.
                  Odio ullamcorper ut sapien amet risus sit. Sit magna nisl
                  adipiscing sapien risus urna imperdiet neque ipsum. Tellus nam
                  at tempus.
                </p>
              </div>
              <div>
                <h2 className="pt-5 pb-4">Solución</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ipsum vulputate
                  integer suspendisse ut suspendisse dignissim sit mauris.
                  Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat
                  felis gravida quam iaculis euismod neque in. Risus suscipit
                  mattis id ultricies eu nec felis. Ornare varius velit purus
                  vulputate in cursus erat.
                </p>
                <p className="pt-3">
                  Mollis aliquet eget aenean praesent velit ullamcorper nulla.
                  Odio ullamcorper ut sapien amet risus sit. Sit magna nisl
                  adipiscing sapien risus urna imperdiet neque ipsum. Tellus nam
                  at tempus.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="py-8">
            <div className="px-7">
              <h2>Galeria</h2>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProyectoInterno;
