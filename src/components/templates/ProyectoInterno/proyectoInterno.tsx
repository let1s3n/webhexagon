import { projectProps, projectsProps } from '@/utils/types/generalProps';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './proyectoInterno.module.scss';
const ProyectoInterno = ({ projects }: projectsProps) => {
  const [changeColor, setChangeColor] = useState<boolean>(false);
  const [project, setProject] = useState<projectProps>({
    slug: '',
    company_name: '',
    project_types: [],
    year: '',
    services: [],
    techtools: [],
    techtags: [],
    service_slogan: '',
    description: '',
    hero_image: '',
    card_image: '',
    logo: '',
    galery: [],
    history: '',
    solution: '',
  });
  const router = useRouter();
  let { slug } = router.query;
  useEffect(() => {
    console.log('projects: ', projects);
    if (projects) {
      let currentProyect = projects.find((element) => element.slug == slug);
      if (currentProyect) {
        setProject(currentProyect);
      }
    }
  }, [slug, projects]);

  const scrollToTopButton = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section className={styles.introduction}>
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN}${project.hero_image}`}
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
        <div className={styles.circleDashedDecore}></div>
        <Container className="px-6 px-xxl-12 position-relative">
          <Row className="text-white p-0 g-0">
            <Col lg={6} xl={7}>
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN}${project.logo}`}
                alt="logo"
                width={200}
                height={0}
                style={{ height: 'auto' }}
              />
              <p className="pt-4 pb-3">
                {project.project_types.map((type) => type)}
              </p>
              <h1 className={styles.title}>{project.company_name}</h1>
              <h2>{project.year}</h2>
            </Col>
            <Col lg={6} xl={5}>
              <Row className={styles.arrowSwitch + ' pt-4'}>
                <Col xs={12}>
                  <div className="position-relative d-flex flex-column justify-content-center">
                    <p
                      style={{
                        height: 50 + 'px',
                        width: 50 + 'px',
                        right: changeColor ? '85px' : 0,
                      }}
                      className={
                        (changeColor
                          ? 'border-white opacity-75'
                          : 'border-white opacity-25') +
                        ' position-absolute border rounded-circle'
                      }
                    ></p>
                    <div className="d-flex gap-3 align-items-center pe-3 justify-content-end">
                      <Link
                        href="/"
                        passHref
                        style={{ lineHeight: '12px', cursor: 'pointer' }}
                        onMouseEnter={() => setChangeColor(true)}
                        onMouseLeave={() => setChangeColor(false)}
                      >
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
                      <small className=" fs-xl-6" style={{ zIndex: 2 }}>
                        Atrás
                      </small>
                    </div>
                  </div>
                </Col>
                {/* <Col
                  xs="auto"
                  lg={6}
                  xl={6}
                  className="d-flex justify-content-center d-none d-lg-flex"
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
                      <small className="fs-xl-6">Siguiente proyecto</small>
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
                </Col> */}
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
            style={{ height: '40px' }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/arrow-double-down.svg`}
              alt="double arrow"
              width={24}
              height={24}
              className={styles.arrowDouble}
              onClick={() => scrollToTopButton()}
            />
          </div>
        </div>
      </section>
      <section className={styles.projectInfo}>
        <Container>
          <Row className="py-8">
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
              <h2 className="pt-5 w-75">{project.service_slogan}</h2>
              <div className="pt-5">
                <p className="border-bottom lh-lg">Servicios proporcionados</p>
                <Row className="py-3">
                  {project.services.map((el, i) => {
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
                  {project.techtools.map((el, i) => {
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
              <div className="d-flex gap-2 flex-wrap">
                {project.techtools.map((ele, index) => {
                  return (
                    <p key={index} className={styles.tag}>
                      {ele}
                    </p>
                  );
                })}
                {/* {project.techtags.map((ele, index) => {
                  return (
                    <p key={index} className={styles.tag}>
                      {ele}
                    </p>
                  );
                })} */}
              </div>
              <p className="py-5">{project.description}</p>
              <div>
                <h2 className="pb-4">Historia</h2>
                <p>{project.history}</p>
                {/* <p className="pt-3">
                {project.description}
                </p> */}
              </div>
              <div>
                <h2 className="pt-5 pb-4">Solución</h2>
                <p>{project.solution}</p>
                {/* <p className="pt-3">
                  Mollis aliquet eget aenean praesent velit ullamcorper nulla.
                  Odio ullamcorper ut sapien amet risus sit. Sit magna nisl
                  adipiscing sapien risus urna imperdiet neque ipsum. Tellus nam
                  at tempus.
                </p> */}
              </div>
            </Col>
          </Row>
          {/* <Row className="py-8">
            <div className="px-7">
              <h2>Galeria</h2>
            </div>
          </Row> */}
        </Container>
      </section>
    </>
  );
};

export default ProyectoInterno;
