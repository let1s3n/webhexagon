import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import { Col, Row, Tabs } from 'react-bootstrap';
import Tab from '../../elements/Tab/tab';
import styles from './tabs.module.scss';
const tabs = () => {
  return (
    <Tabs
      defaultActiveKey="web"
      id="uncontrolled-tab-example"
      className={styles.customTab + ' mb-10'}
    >
      {/* --- APLICACIONES WEB --- */}
      <Tab
        eventKey="web"
        title="APLICACIONES WEB"
        style={{ rowGap: '72px', whiteSpace: 'nowrap' }}
        className="overflow-hidden"
      >
        {/* <h1 className="text-black">WEB</h1> */}
        <Fade direction="down" triggerOnce="true" cascade>
          <Row
            className={styles.customRow + ' g-0'}
            style={{ columnGap: '118px' }}
          >
            <Col xs="auto">
              <Link
                href={`/proyectos/hacons`}
                passHref
                className="text-decoration-none"
              >
                <Image
                  alt="project 0 image"
                  src={`${process.env.NEXT_PUBLIC_CDN}images/projects/web/showcase-hacons-secondary.jpg`}
                  width={500}
                  /* height={279} */
                  height={0}
                  className={styles.tabImage}
                  quality={100}
                />
              </Link>
            </Col>
            <Col xs="auto">
              <Link
                href={`/proyectos/alr`}
                passHref
                className="text-decoration-none"
              >
                <Image
                  alt="project 1 image"
                  src={`${process.env.NEXT_PUBLIC_CDN}images/projects/web/showcaseALR2.png`}
                  width={500}
                  /* height={279} */
                  height={0}
                  className={styles.tabImage}
                  quality={100}
                />
              </Link>
            </Col>
          </Row>
        </Fade>

        <Fade direction="down" triggerOnce="true" cascade>
          <Row
            className={styles.customRow + ' g-0 pt-6 pt-xl-0'}
            style={{ columnGap: '118px' }}
          >
            <Col xs="auto">
              <Link
                href={`/proyectos/amarante`}
                passHref
                className="text-decoration-none"
              >
                <Image
                  alt="project 2 image"
                  /* src={`${process.env.NEXT_PUBLIC_CDN}images/projects/mock/proyecto2.png`} */
                  src={`${process.env.NEXT_PUBLIC_CDN}images/projects/web/showcaseAMARANTE2.png`}
                  width={500}
                  /* height={279} */
                  height={0}
                  className={styles.tabImage}
                  quality={100}
                />
              </Link>
            </Col>
            <Col xs="auto">
              <Link
                href={`/proyectos/lusitano`}
                passHref
                className="text-decoration-none"
              >
                <Image
                  alt="project 3 image"
                  /* src={`${process.env.NEXT_PUBLIC_CDN}images/projects/mock/proyecto3.png`} */
                  src={`${process.env.NEXT_PUBLIC_CDN}images/projects/web/showcaseLUSITANO2.png`}
                  width={500}
                  /* height={279} */
                  height={0}
                  className={styles.tabImage}
                  quality={100}
                />
              </Link>
            </Col>
          </Row>
        </Fade>

        <Fade direction="down" triggerOnce="true" cascade>
          <Row
            className={styles.customRow + ' g-0 pt-6 pt-xl-0'}
            style={{ columnGap: '118px' }}
          >
            <Col xs="auto">
              <Link
                href={`/proyectos/alr_reports`}
                passHref
                className="text-decoration-none"
              >
                <Image
                  alt="project 4 image"
                  src={`${process.env.NEXT_PUBLIC_CDN}images/projects/web/showcaseREPORTESALR3.png`}
                  width={500}
                  height={0}
                  className={styles.tabImage}
                  quality={100}
                />
              </Link>
            </Col>
          </Row>
        </Fade>
      </Tab>
      {/* --- SOFTWARE A MEDIDA--- */}
      <Tab
        eventKey="software"
        title="DESARROLLO DE SOFTWARE"
        style={{ rowGap: '72px' }}
        className="overflow-hidden"
      >
        <Fade direction="down" triggerOnce="true" cascade>
          <Row
            className={styles.customRow + ' g-0'}
            style={{ columnGap: '118px' }}
          >
            <Col xs="auto">
              <Image
                alt="project 1 image"
                src={`${process.env.NEXT_PUBLIC_CDN}images/projects/desktop/SIM1.png`}
                width={500}
                height={0}
                className={styles.tabImage}
              />
            </Col>
            <Col xs="auto">
              <Image
                alt="project 2 image"
                src={`${process.env.NEXT_PUBLIC_CDN}images/projects/desktop/SIM2.png`}
                width={500}
                height={0}
                className={styles.tabImage}
              />
            </Col>
          </Row>
        </Fade>

        <Fade direction="down" triggerOnce="true" cascade>
          <Row
            className={styles.customRow + ' g-0 pt-6 pt-xl-0'}
            style={{ columnGap: '118px' }}
          >
            <Col xs="auto">
              <Image
                alt="project 3 image"
                src={`${process.env.NEXT_PUBLIC_CDN}images/projects/desktop/SIM3.png`}
                width={500}
                height={0}
                className={styles.tabImage}
              />
            </Col>
          </Row>
        </Fade>
      </Tab>
      {/* --- APLICACIONES MOVILES --- */}
      {/* <Tab
        eventKey="moviles"
        title="APLICACIONES MÓVILES"
        style={{ rowGap: '72px' }}
        className="overflow-hidden"
      >
        <Fade direction="down" triggerOnce="true" cascade>
          <Row
            className={styles.customRow + ' g-0'}
            style={{ columnGap: '118px' }}
          >
            <Col xs="auto">
              <Image
                alt="project 1 image"
                src={`${process.env.NEXT_PUBLIC_CDN}images/projects/mock/proyecto1.png`}
                width={500}
                height={0}
                className={styles.tabImage}
              />
            </Col>
            <Col xs="auto">
              <Image
                alt="project 2 image"
                src={`${process.env.NEXT_PUBLIC_CDN}images/projects/mock/proyecto2.png`}
                width={500}
                height={0}
                className={styles.tabImage}
              />
            </Col>
          </Row>
        </Fade>

        <Fade direction="down" triggerOnce="true" cascade>
          <Row
            className={styles.customRow + ' g-0 pt-6 pt-xl-0'}
            style={{ columnGap: '118px' }}
          >
            <Col xs="auto">
              <Image
                alt="project 3 image"
                src={`${process.env.NEXT_PUBLIC_CDN}images/projects/mock/proyecto3.png`}
                width={500}
                height={0}
                className={styles.tabImage}
              />
            </Col>
            <Col xs="auto">
              <Image
                alt="project 4 image"
                src={`${process.env.NEXT_PUBLIC_CDN}images/projects/mock/proyecto4.png`}
                width={500}
                height={0}
                className={styles.tabImage}
              />
            </Col>
          </Row>
        </Fade>
      </Tab> */}
      {/* --- REDES SOCIALES --- */}
      {/* <Tab
        eventKey="redes"
        title="REDES SOCIALES"
        style={{ rowGap: '72px' }}
        className="overflow-hidden"
      >
        <Fade direction="down" triggerOnce="true" cascade>
          <Row
            className={styles.customRow + ' g-0'}
            style={{ columnGap: '118px' }}
          >
            <Col xs="auto">
              <Image
                alt="project 1 image"
                src={`${process.env.NEXT_PUBLIC_CDN}images/projects/mock/proyecto1.png`}
                width={500}
                height={0}
                className={styles.tabImage}
              />
            </Col>
            <Col xs="auto">
              <Image
                alt="project 2 image"
                src={`${process.env.NEXT_PUBLIC_CDN}images/projects/mock/proyecto2.png`}
                width={500}
                height={0}
                className={styles.tabImage}
              />
            </Col>
          </Row>
        </Fade>

        <Fade direction="down" triggerOnce="true" cascade>
          <Row
            className={styles.customRow + ' g-0 pt-6 pt-xl-0'}
            style={{ columnGap: '118px' }}
          >
            <Col xs="auto">
              <Image
                alt="project 3 image"
                src={`${process.env.NEXT_PUBLIC_CDN}images/projects/mock/proyecto3.png`}
                width={500}
                height={0}
                className={styles.tabImage}
              />
            </Col>
            <Col xs="auto">
              <Image
                alt="project 4 image"
                src={`${process.env.NEXT_PUBLIC_CDN}images/projects/mock/proyecto4.png`}
                width={500}
                height={0}
                className={styles.tabImage}
              />
            </Col>
          </Row>
        </Fade>
      </Tab> */}
    </Tabs>
  );
};

export default tabs;
