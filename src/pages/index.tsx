import Clientes from '@/components/templates/Clientes/clientes';
import Contacto from '@/components/templates/Contacto/contacto';
import Home from '@/components/templates/Home/home';
import Servicios from '@/components/templates/Servicios/servicios';
import { imageProps } from '@/utils/types/generalProps';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPlaiceholder } from 'plaiceholder';
import { NextPageWithLayout } from './_app';

interface serviciosImageProps {
  serviciosImageProps: { src: string; blurDataURL: string }[];
}

interface clientsProps {
  clients: { company_name: string; logo: string }[];
}

const index: NextPageWithLayout<
  imageProps & clientsProps & serviciosImageProps
> = ({ imageProps, clients, serviciosImageProps }) => {
  return (
    <>
      <Head>
        <title>Desarrollo de software a medida | Hexagon Studio</title>
        <meta
          name="description"
          content="Hexagon Studio ofrece desarrollo de páginas web, aplicaciones multiplataforma (web, móvil y escritorio), e-commerce, ERP y software a medida. Impulsa tu negocio con nuestras soluciones digitales personalizadas e innovadoras."
        />
        <meta
          name="keywords"
          content="hexagonstudio.pe, hexagonstudio pe, hexagon studio, desarrollo de paginas web, desarrollo de páginas web, desarrollo de software en lima, empresa de desarrollo de software en lima, empresa de desarrollo de software en Peru, empresa de desarrollo de software en peru, empresa de desarrollo de software en Perú, empresa de desarrollo de software en perú"
        />
      </Head>
      <section id="home">
        <Home imageProps={imageProps} />
      </section>
      <section id="servicios">
        <Servicios imageProps={serviciosImageProps} />
      </section>
      <section id="clientes">
        <Clientes clients={clients} />
      </section>
      <section id="contacto">
        <Contacto />
      </section>
    </>
  );
};

/* index.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
}; */

export const getStaticProps: GetStaticProps = async () => {
  const illustrationHome = await getPlaiceholder(
    `${process.env.NEXT_PUBLIC_CDN}images/home/illustrationHome1.png`
  );
  const cubosHome = await getPlaiceholder(
    `${process.env.NEXT_PUBLIC_CDN}images/home/cubosHome.png`
  );
  const teamwork = await getPlaiceholder(
    `${process.env.NEXT_PUBLIC_CDN}images/services/teamwork.png`
  );
  const clients = [
    {
      company_name: 'H.A. CONS',
      logo: 'images/projects/logos/hacons-logo-white.png',
    },
    { company_name: 'SMRL ALR', logo: 'images/projects/logos/alr-logo.png' },
    {
      company_name: 'AMARANTE GROUP',
      logo: 'images/projects/logos/amarante-logo.png',
    },
    {
      company_name: 'LUSITANO MARITIME',
      logo: 'images/projects/logos/lusitano-logo.png',
    },
    {
      company_name: 'PECEPE',
      logo: 'images/projects/logos/logo_pecepe3.png',
    },
    {
      company_name: 'Mi Nanny Cares',
      logo: 'images/projects/logos/logo-SARA.png',
    },
  ];
  return {
    props: {
      imageProps: [
        {
          ...illustrationHome.img,
          blurDataURL: illustrationHome.base64,
        },
        {
          ...cubosHome.img,
          blurDataURL: cubosHome.base64,
        },
      ],
      serviciosImageProps: [
        {
          ...teamwork.img,
          blurDataURL: teamwork.base64,
        },
      ],
      clients,
    },
  };
};

export default index;
