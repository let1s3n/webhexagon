import Servicios from '@/components/templates/Servicios/servicios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { getPlaiceholder } from 'plaiceholder';

const servicios = ({
  imageProps,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Servicios</title>
      </Head>
      <Servicios imageProps={imageProps} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const teamwork = await getPlaiceholder(
    `${process.env.NEXT_PUBLIC_CDN}images/services/teamwork.png`
  );

  return {
    props: {
      imageProps: [
        {
          ...teamwork.img,
          blurDataURL: teamwork.base64,
        },
      ],
    },
  };
};

export default servicios;
