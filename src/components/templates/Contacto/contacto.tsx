import CustomForm from '@/components/modules/CustomForm/customForm';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import Image from 'next/image';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { bebasNeue } from '../../../lib/fonts';
import styles from './contacto.module.scss';
const Contacto = () => {
  const { width, height } = useWindowDimensions();
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
                      Ver trabajo
                    </p>
                  </Button>
                </Col>
                <Col></Col>
              </Row>
            </Col>
          </Row>
          <div
            className={
              styles.infoBox +
              (width >= 600
                ? ' position-absolute top-100 start-50 translate-middle text-white'
                : ' position-relative text-white')
            }
          >
            <Row
              className="g-0 justify-content-center"
              style={{ rowGap: '16px' }}
            >
              <Col xs="auto" className="d-flex justify-content-center">
                <div className={styles.smallBoxleft}>
                  <div className={styles.cardTitle}>
                    <h4 className="fs-6 fs-xl-4">Correo general</h4>
                  </div>
                  <p className="py-2">general@hexagon-studios.com</p>
                </div>
              </Col>
              <Col xs="auto" className="d-flex justify-content-center">
                <div className={styles.smallBoxRight}>
                  <div className={styles.cardTitle}>
                    <h4 className="fs-6 fs-xl-4">numero de contacto</h4>
                  </div>
                  <div className="py-2 d-flex justify-content-between">
                    <p>+51 993455698</p>
                    <p>+51 994531344</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        <div className={styles.circleDashedDecore}></div>
      </section>

      <section className={styles.contactForm}>
        <Container className="g-0">
          <div
            className="d-flex justify-content-center"
            style={{ columnGap: '1rem' }}
          >
            <div className={styles.icon + ' ' + styles['icon--fb']}>
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN}images/general/social/fbIcon.svg`}
                alt="Facebook Icon"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.icon + ' ' + styles['icon--ig']}>
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN}images/general/social/igIcon.svg`}
                alt="Instagram Icon"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.icon + ' ' + styles['icon--ws']}>
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN}images/general/social/whatsappIcon.svg`}
                alt="Whatsapp Icon"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.icon + ' ' + styles['icon--yt']}>
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN}images/general/social/ytIcon.svg`}
                alt="Youtube Icon"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="text-white pt-6">
            <h1>HABLEMOS. Déjanos un mensaje</h1>

            <CustomForm bgInput="bg-primary" />
          </div>
        </Container>
        <div className={styles.circleDashedSmallDecore}></div>
        <div className={styles.circleDecore}></div>
      </section>
    </>
  );
};

export default Contacto;
