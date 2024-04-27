import CustomForm from '@/components/modules/CustomForm/customForm';
import SuccessMessage from '@/components/modules/SuccessMessage/successMessage';
import useWindowDimensions from '@/utils/hooks/useWindowDimensions';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import { bebasNeue } from '../../../utils/fonts';
import styles from './home.module.scss';

interface Props {
  imageProps: InferGetStaticPropsType<GetStaticProps>;
  setSelectedProjectData: Dispatch<SetStateAction<string>>;
}

const Home = ({ imageProps, setSelectedProjectData }: Props) => {
  const { width } = useWindowDimensions();
  const [isFormComplete, setFormComplete] = useState<boolean>(true);
  const [isSendForm, setIsSendForm] = useState<boolean>(false);
  const [projects, setProjects] = useState([] as any[]);

  useEffect(() => {
    /* console.log('projects:', projects); */
    setProjects(projects);
    setSelectedProjectData('hola');
  }, [projects]);

  return (
    <>
      <section className={styles.introduction}>
        <Container
          className="g-0 d-flex flex-column flex-xl-row p-3 px-xxl-10 pt-xxl-9 justify-content-between align-items-center align-items-xl-stretch"
          style={{ rowGap: '1.5rem' }}
        >
          <div className={styles.imageContainer}>
            <Image
              // src={`${process.env.NEXT_PUBLIC_CDN}images/home/illustrationHome1.png`}
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
                Define tu presencia digital.
              </h1>
              {/* <h1
                className={styles.title + ' text-white text-center text-xl-end'}
              >
                Lorem ipsum
              </h1> */}
            </div>
            <div className={styles.textContainer}>
              <p className="text-white pb-3 text-center text-lg-end">
                Que te encuentren en todos los canales digitales para que
                <strong> crezcas sin límites.</strong>
              </p>
              <p className="text-white pb-3 text-center text-lg-end">
                En nuestro apasionado equipo, nos especializamos en dar vida a
                tus ideas y aspiraciones a través de servicios integrales. Desde
                la creación de páginas web impactantes que cautivarán a tu
                audiencia hasta el desarrollo de aplicaciones móviles
                innovadoras que llevarán tu negocio al siguiente nivel, estamos
                aquí para transformar tu visión en una realidad digital
                vibrante.
              </p>
            </div>
            <div
              className={styles.customButtonContainer + ' position-relative'}
            >
              <Link href="/contacto" passHref>
                <Button variant="link" className={styles.customButton}>
                  <p className={bebasNeue.className + ' m-0 lh-1'}>
                    CONTACTAR AHORA
                  </p>
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
            <p className={bebasNeue.className + ' m-0 lh-1'}>VER SERVICIOS</p>
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

      <section className={styles.projects}>
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
                <p className={styles.innerText + ' ' + bebasNeue.className}>
                  VER PROYECTOS
                </p>
              </Button>
            </Link>
          </div>

          <div
            className="d-flex flex-column mt-8 align-items-center align-items-xxl-stretch"
            style={{ rowGap: '48px' }}
          >
            {projects.length > 0 &&
              projects.map((project, index) => {
                return (
                  <div key={index} className={styles.proyect}>
                    <Image
                      src={process.env.NEXT_PUBLIC_CDN + project['card_image']}
                      alt="Proyecto Home 1"
                      width={400}
                      height={0}
                      className={styles.imgProyect}
                      style={{ height: 'auto' }}
                    />

                    <div className={styles.right}>
                      <div className="d-flex" style={{ columnGap: '12px' }}>
                        {project['project_types'].map(
                          (tag: any, index: any) => {
                            return (
                              <div key={index} className={styles.tag}>
                                <p className="lh-1">{tag}</p>
                              </div>
                            );
                          }
                        )}
                      </div>

                      <h3 className="lh-1">{project['company_name']}</h3>

                      <p className={styles.proyectDescription}>
                        {project['description']}
                      </p>

                      <div
                        className="d-flex align-items-center"
                        style={{ columnGap: '1rem' }}
                      >
                        <p className="lh-1">Ir al proyecto</p>
                        <Link
                          href="/proyectos"
                          passHref
                          style={{ lineHeight: '12px' }}
                        >
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
                );
              })}
          </div>
        </Container>

        <div className={styles.circleDecore}></div>
      </section>

      <Parallax
        /* blur={10} */
        /* bgImage={`${process.env.NEXT_PUBLIC_CDN}images/home/bgHome4.jpg`} */
        bgImage={`${process.env.NEXT_PUBLIC_CDN}images/home/bgHome5.png`}
        bgImageAlt="background home 5"
        strength={500}
        disabled={width <= 600 ? true : false}
      >
        {/* <Background>
          <img
            src={`${process.env.NEXT_PUBLIC_CDN}images/home/bgHome5.png`}
            alt="background home 5"
          />
        </Background> */}
        <section className={styles.contact}>
          <div id="contactMain" className={styles.main}>
            <Container className="g-0 text-white text-center">
              {/* <TechGrid /> */}

              {!isSendForm ? (
                <div className="text-white pt-6">
                  <h2>¿TODO LISTO PARA EMPEZAR?</h2>
                  <p>
                    Dejanos un mensaje y te contactaremos lo más pronto posible.
                  </p>
                  <CustomForm
                    bgInput="bg-black1"
                    isFormComplete={isFormComplete}
                    setIsSendForm={setIsSendForm}
                  />
                </div>
              ) : (
                <SuccessMessage />
              )}
            </Container>
          </div>

          <div className={styles.outsideClip}></div>
        </section>
      </Parallax>
    </>
  );
};

export default Home;
