import CustomForm from '@/components/modules/CustomForm/customForm';
import SuccessMessage from '@/components/modules/SuccessMessage/successMessage';
import useWindowDimensions from '@/utils/hooks/useWindowDimensions';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { bebasNeue } from '../../../utils/fonts';
import styles from './contacto.module.scss';
const Contacto = () => {
  const { width } = useWindowDimensions();

  const [isSendForm, setIsSendForm] = useState<boolean>(false);

  return (
    <>
      <section className={styles.introduction}>
        <Container className="px-xxl-12">
          <Row className="text-white pt-8 pb-5 g-0">
            <Col
              lg={6}
              xl={7}
              className="d-flex justify-content-center justify-content-lg-start text-center text-lg-start"
            >
              <h1 className={styles.title + ' ps-lg-5 ps-xl-0'}>
                Tu nos escribes, nosotros respondemos
              </h1>
            </Col>
            <Col
              lg={6}
              xl={5}
              className=" d-flex align-items-center align-items-lg-start flex-column pt-3 pt-lg-0"
            >
              <p
                className="m-0 text-center text-lg-start"
                style={{ maxWidth: '362px' }}
              >
                Creamos plataformas que impactan y conectan con tu audiencia.{' '}
                <br />
                ¡Simplifica, automatiza y alcanza tus metas con nuestro enfoque
                experto!
              </p>
              <Row className="pt-4">
                <Col>
                  <Link
                    href="/proyectos"
                    passHref
                    style={{ zIndex: '2', textDecoration: 'none' }}
                  >
                    <Button
                      variant="outline-white"
                      className={styles.customButton}
                    >
                      <p className={bebasNeue.className + ' m-0 lh-1'}>
                        Ver trabajo
                      </p>
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            className={
              styles.infoBox +
              (width >= 600
                ? ' g-0 position-absolute top-100 start-50 translate-middle text-white'
                : ' g-0 position-relative text-white d-flex flex-column mx-auto')
            }
          >
            <Col xs="auto" className="d-flex justify-content-center">
              <div className={styles.smallBoxleft}>
                <div className={styles.cardTitle}>
                  <h4 className="fs-6 fs-xl-4">Correo general</h4>
                </div>
                <div className="pt-2">
                  <Link
                    href="mailto:info@hexagonstudio.pe"
                    className={styles.linkMail}
                  >
                    info@hexagonstudio.pe
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs="auto" className="d-flex justify-content-center">
              <div className={styles.smallBoxRight}>
                <div className={styles.cardTitle}>
                  <h4 className="fs-6 fs-xl-4">numero de contacto</h4>
                </div>
                <div className="py-2 d-flex justify-content-between">
                  <small className="fs-md-6">+51 927 575 917</small>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className={styles.circleDashedDecore + ' d-none d-md-flex'}></div>
      </section>

      <section className={styles.contactForm}>
        <Container className="d-flex justify-content-center">
          <div className="d-flex" style={{ columnGap: '1rem' }}>
            <div className={styles.icon + ' ' + styles['icon--fb']}>
              <Link
                href="https://www.facebook.com/HexagonStudioPeru"
                target="_blank"
                className="text-decoration-none text-white"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/social/fbIcon.svg`}
                  alt="Facebook Icon"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
            <div className={styles.icon + ' ' + styles['icon--ig']}>
              <Link
                href="https://www.instagram.com/hexagonstudio_peru"
                target="_blank"
                className="text-decoration-none text-white"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/social/igIcon.svg`}
                  alt="Instagram Icon"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
            <div className={styles.icon + ' ' + styles['icon--ws']}>
              <Link
                href="https://api.whatsapp.com/send?phone=927575917"
                target="_blank"
                className="text-decoration-none text-white"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/social/whatsappIcon.svg`}
                  alt="Whatsapp Icon"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </Container>
        <Container className="g-0">
          {!isSendForm ? (
            <div className="text-white pt-6">
              <h1>HABLEMOS. Déjanos un mensaje</h1>
              <CustomForm bgInput="bg-primary" setIsSendForm={setIsSendForm} />
            </div>
          ) : (
            <SuccessMessage />
          )}
        </Container>
        <div className={styles.circleDashedSmallDecore}></div>
        <div className={styles.circleDecore}></div>
      </section>
    </>
  );
};

export default Contacto;
