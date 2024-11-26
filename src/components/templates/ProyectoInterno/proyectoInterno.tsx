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
    link_web: '',
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
          /* width={400}
          height={0} */
          style={{
            /* height: 'auto',
            width: '100%', */
            position: 'absolute',
            top: 0,
            /* zIndex: -1, */
          }}
          fill
          className={styles.heroBg}
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
                      <div
                        style={{ lineHeight: '12px', cursor: 'pointer' }}
                        onMouseEnter={() => setChangeColor(true)}
                        onMouseLeave={() => setChangeColor(false)}
                        onClick={() => router.back()}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CDN}images/general/arrow-right-icon.png`}
                          alt="Arrow"
                          width={39}
                          height={0}
                          style={{
                            height: 'auto',
                            transform: 'rotateY(180deg)',
                          }}
                        />
                      </div>
                      <small className=" fs-xl-6" style={{ zIndex: 2 }}>
                        Atrás
                      </small>
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
            <Col xs={12} md={6} className="px-4 px-lg-7">
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
                  <Link
                    href={project.link_web}
                    target="_blank"
                    passHref
                    style={{ lineHeight: '12px' }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_CDN}images/general/arrow-right-icon.png`}
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
            <Col xs={12} md={6} className="px-4 px-lg-7">
              <div className="d-flex gap-2 flex-wrap">
                {project.techtags.map((ele, index) => {
                  return (
                    <p key={index} className={styles.tag}>
                      {ele}
                    </p>
                  );
                })}
              </div>
              <p className="py-5" style={{ textAlign: 'justify' }}>
                {project.description}
              </p>
              <div>
                <h2 className="pb-4">Historia</h2>
                <p style={{ textAlign: 'justify' }}>{project.history}</p>
              </div>
              <div>
                <h2 className="pt-5 pb-4">Solución</h2>
                <p style={{ textAlign: 'justify' }}>{project.solution}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProyectoInterno;
