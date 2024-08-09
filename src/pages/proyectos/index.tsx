import Proyectos from '@/components/templates/Proyectos/proyectos';
import Head from 'next/head';
const proyectos = () => {
  return (
    <>
      <Head>
        <title>
          Proyectos | Soluciones Digitales Innovadoras | Hexagon Studio
        </title>
        <meta
          name="description"
          content="Explora los proyectos de Hexagon Studio. Descubre cómo hemos transformado ideas en soluciones digitales efectivas para nuestros clientes con apps web, móviles y software a medida."
        />
      </Head>
      <Proyectos />
    </>
  );
};

export default proyectos;
