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
      <div className={styles.circleDashedSmallDecore}></div>
      <div className={styles.circleDecore}></div>
    </Container>
  );
};

export default SuccessMessage;
