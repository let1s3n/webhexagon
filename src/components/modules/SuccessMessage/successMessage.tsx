import Image from 'next/image';
import { Container } from 'react-bootstrap';
import styles from './successMessage.module.scss';

const SuccessMessage = () => {
  return (
    <Container className={styles.successMessageContainer + ' pt-5'}>
      <div className="text-white">
        <h1>¡Pronto empezaremos a crear juntos tu transformacion digital!</h1>
        <p className="py-3">
          !Gracias por contactarnos! Nos comunicaremos contigo a la brevedad
          posible.
        </p>
      </div>
      <div>
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN}images/general/heroMessageSuccess.png`}
          alt="Hero Message Success"
          width={400}
          height={0}
          style={{ height: 'auto' }}
        />
      </div>
      <div className={styles.circleDashedSmallDecore}></div>
      <div className={styles.circleDecore}></div>
    </Container>
  );
};

export default SuccessMessage;
