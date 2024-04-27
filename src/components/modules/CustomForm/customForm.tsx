import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import styles from './customForm.module.scss';

const CustomForm = ({ bgInput, setIsSendForm }: any) => {
  const [isFormComplete, setFormComplete] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState,
    formState: { isSubmitSuccessful, errors, isDirty, dirtyFields },
  } = useForm({
    defaultValues: {
      full_name: '',
      email: '',
      company: '',
      phone_number: '',
      project: '',
      /* privacy_policies: false, */
    },
  });

  const onSubmit = async (data: any) => {
    console.log('data: ', data);
    const JSONdata = JSON.stringify(data);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch('/api/contact', options);
    const result = await response.json();
    setIsSendForm(true);
  };
  const handleOnKeyDown = (e: any) => {
    var ASCIICode = e.which ? e.which : e.keyCode;

    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return e.preventDefault();
    return true;
  };

  useEffect(() => {
    let count = Object.keys(dirtyFields).length;

    if (count === 5) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }

    if (isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={styles.customForm}
    >
      <Row
        className="g-0 mb-5"
        style={{
          marginBottom: '36px',
          columnGap: '1.5rem',
          rowGap: '1.5rem',
        }}
      >
        <Col xs={12} xl="auto" className="position-relative">
          <FloatingLabel
            controlId="floatingName"
            label="Nombre completo"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Nombre completo"
              className={bgInput}
              {...register('full_name', { required: true })}
            />
            {errors.full_name?.type === 'required' && (
              <div className="d-flex mt-2" style={{ columnGap: 0.5 + 'rem' }}>
                <Image
                  alt="error icon"
                  src="/images/error-icon.svg"
                  width={16}
                  height={16}
                  sizes="16px"
                />
                <p className="error-text m-0 fs-14 fw-600 lh-1">
                  Por favor ingrese su nombre completo
                </p>
              </div>
            )}
          </FloatingLabel>
        </Col>

        <Col xs={12} xl="auto" className="position-relative">
          <FloatingLabel
            controlId="floatingCompany"
            label="Company"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Company"
              className={bgInput}
              {...register('company')}
            />
          </FloatingLabel>
        </Col>

        <Col xs={12} xl="auto" className="position-relative">
          <FloatingLabel
            controlId="floatingEmail"
            label="Correo eléctronico"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="Correo eléctronico"
              className={bgInput}
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email?.type === 'required' && (
              <div className="d-flex mt-2" style={{ columnGap: 0.5 + 'rem' }}>
                <Image
                  alt="error icon"
                  src="/images/error-icon.svg"
                  width={16}
                  height={16}
                  sizes="16px"
                />
                <p className="error-text m-0 fs-14 fw-600 lh-1">
                  Tiene que ingresar un correo
                </p>
              </div>
            )}
            {errors.email?.type === 'pattern' && (
              <div className="d-flex mt-2" style={{ columnGap: 0.5 + 'rem' }}>
                <Image
                  alt="error icon"
                  src="/images/error-icon.svg"
                  width={16}
                  height={16}
                  sizes="16px"
                />
                <p className="error-text m-0 fs-14 fw-600 lh-1">
                  Por favor ingrese un formato de correo válido
                </p>
              </div>
            )}
          </FloatingLabel>
        </Col>

        <Col xs={12} xl="auto" className="position-relative">
          <FloatingLabel
            controlId="floatingPhone"
            label="Número de contacto"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Número de contacto"
              className={bgInput}
              minLength={9}
              maxLength={12}
              onKeyDown={handleOnKeyDown}
              {...register('phone_number', {
                required: true,
                pattern: /[9][0-9]{8,11}$/i,
              })}
            />
            {errors.phone_number?.type === 'required' && (
              <div className="d-flex mt-2" style={{ columnGap: '.5rem' }}>
                <Image
                  alt="error icon"
                  src="/images/error-icon.svg"
                  width={16}
                  height={16}
                  sizes="16px"
                />
                <p className="error-text m-0 fs-14 fw-600 lh-1">
                  Tiene que ingresar un número de celular
                </p>
              </div>
            )}
            {errors.phone_number?.type === 'pattern' && (
              <div className="d-flex mt-2" style={{ columnGap: 0.5 + 'rem' }}>
                <Image
                  alt="error icon"
                  src="/images/error-icon.svg"
                  width={16}
                  height={16}
                  sizes="16px"
                />
                <p className="error-text m-0 fs-14 fw-600 lh-1">
                  Número de teléfono inválido
                </p>
              </div>
            )}
          </FloatingLabel>
        </Col>

        <Col xs={12} className="position-relative">
          <FloatingLabel
            controlId="floatingMessage"
            label="Mensaje"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Mensaje"
              style={{ height: '126px' }}
              className={bgInput}
              {...register('project', { required: true })}
            />
            {errors.project?.type === 'required' && (
              <div className="d-flex mt-2" style={{ columnGap: 0.5 + 'rem' }}>
                <Image
                  alt="error icon"
                  src="/images/error-icon.svg"
                  width={16}
                  height={16}
                  sizes="16px"
                />
                <p className="error-text m-0 fs-14 fw-600 lh-1">
                  Por favor ingrese un mensaje
                </p>
              </div>
            )}
          </FloatingLabel>
        </Col>
      </Row>

      <div className={styles.customButtonContainer + ' position-relative'}>
        {/* <Link href="/contacto" passHref> */}
        <Button
          type="submit"
          variant="link"
          className={
            styles.customButton +
            ' ' +
            (isFormComplete && styles.customButtonColored)
          }
          onClick={() => setIsSendForm(true)}
          disabled={!isFormComplete}
        >
          ENVIAR AHORA
        </Button>
        {/* </Link> */}
        <div className={styles.buttonDecoration}></div>
      </div>
    </Form>
  );
};

export default CustomForm;
