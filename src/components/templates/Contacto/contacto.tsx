import CustomForm from '@/components/modules/CustomForm/customForm';
import SuccessMessage from '@/components/modules/SuccessMessage/successMessage';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { bebasNeue } from '../../../lib/fonts';
import styles from './contacto.module.scss';
const Contacto = () => {
  const { width, height } = useWindowDimensions();
  const [isFormComplete, setFormComplete] = useState<boolean>(true);
  const [isSendForm, setIsSendForm] = useState<boolean>(false);

  return (
    <>
      <section className={styles.introduction}>
        <Container className="px-xxl-12">
          <Row className="text-white pt-8 pb-5 g-0">
            <Col xl={7}>
              <h1 className={styles.title}>
                Tu nos escribes, nosotros respondemos
              </h1>
            </Col>
            <Col xl={5}>
              <p className="m-0" style={{ maxWidth: '362px' }}>
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
                <Col></Col>
              </Row>
            </Col>
          </Row>
          <Row
            className={
              styles.infoBox +
              (width >= 600
                ? ' g-0 position-absolute top-100 start-50 translate-middle text-white'
                : ' g-0 position-relative text-white')
            }
          >
            {/* <Row
              className="g-0 justify-content-center"
              style={{ rowGap: '1rem', columnGap: '1rem' }}
            > */}
            <Col xs="auto" className="d-flex justify-content-center">
              <div className={styles.smallBoxleft}>
                <div className={styles.cardTitle}>
                  <h4 className="fs-6 fs-xl-4">Correo general</h4>
                </div>
                <p className="py-2">info@hexagonstudio.pe</p>
              </div>
            </Col>
            <Col xs="auto" className="d-flex justify-content-center">
              <div className={styles.smallBoxRight}>
                <div className={styles.cardTitle}>
                  <h4 className="fs-6 fs-xl-4">numero de contacto</h4>
                </div>
                <div className="py-2 d-flex justify-content-between">
                  <p>+51 907 190 881</p>
                  <p>+51 927 575 917</p>
                </div>
              </div>
            </Col>
            {/* </Row> */}
          </Row>
        </Container>

        <div className={styles.circleDashedDecore}></div>
      </section>

      <section className={styles.contactForm}>
        <Container className="d-flex justify-content-center">
          <div className="d-flex" style={{ columnGap: '1rem' }}>
            <div className={styles.icon + ' ' + styles['icon--fb']}>
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/social/fbIcon.svg`}
                alt="Facebook Icon"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.icon + ' ' + styles['icon--ig']}>
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/social/igIcon.svg`}
                alt="Instagram Icon"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.icon + ' ' + styles['icon--ws']}>
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/social/whatsappIcon.svg`}
                alt="Whatsapp Icon"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.icon + ' ' + styles['icon--yt']}>
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/social/ytIcon.svg`}
                alt="Youtube Icon"
                width={24}
                height={24}
              />
            </div>
          </div>
        </Container>
        <Container className="g-0">
          {!isSendForm ? (
            <div className="text-white pt-6">
              <h1>HABLEMOS. Déjanos un mensaje</h1>

              <CustomForm
                bgInput="bg-primary"
                isFormComplete={isFormComplete}
                setIsSendForm={setIsSendForm}
              />
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
