import Contacto from '@/components/templates/Contacto/contacto';
import Head from 'next/head';
const contacto = () => {
  return (
    <>
      <Head>
        <title>
          Contáctanos | Desarrollo de Software a Medida | Hexagon Studio
        </title>
        <meta
          name="description"
          content="Estamos aquí para ayudarte. Ponte en contacto con Hexagon Studio para obtener soluciones digitales personalizadas y llevar tu negocio al siguiente nivel."
        />
      </Head>
      <Contacto />
    </>
  );
};

export default contacto;
