import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import styles from './cardWithUs.module.scss';

const CardWithUs = () => {
  return (
    <Row
      xs={1}
      className={
        styles.withUs + ' text-white g-0 mx-auto mt-6 py-10 position-relative'
      }
      style={{ rowGap: '1rem' }}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_CDN}images/general/bg-shapes.png`}
        alt="Proyecto Home 4"
        width={400}
        height={0}
        className={styles.imgProyect}
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
        }}
      />
      <Col>
        <h1 className="text-center">Hagamos historia. JUNTOS.</h1>
      </Col>
      <Col className="d-flex justify-content-center">
        <div className="position-relative mt-3 d-flex flex-column justify-content-center">
          <div className="d-flex gap-3 align-items-center ps-3">
            <p>Empecemos a trabajar</p>
            <Link href="/contacto" passHref style={{ lineHeight: '12px' }}>
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
      </Col>
    </Row>
  );
};

export default CardWithUs;
