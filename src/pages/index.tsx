import Home from '@/components/templates/Home/home';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { getPlaiceholder } from 'plaiceholder';
import { Dispatch, SetStateAction } from 'react';
interface Props {
  imageProps: InferGetStaticPropsType<typeof getStaticProps>;
  setSelectedProjectData: Dispatch<SetStateAction<string>>;
}

const index = ({ imageProps, setSelectedProjectData }: Props) => {
  return (
    <>
      <Head>
        <title>Hexagon Studio</title>
      </Head>
      <Home
        imageProps={imageProps}
        setSelectedProjectData={setSelectedProjectData}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const illustrationHome = await getPlaiceholder(
    `${process.env.NEXT_PUBLIC_CDN}images/home/illustrationHome1.png`
  );
  const cubosHome = await getPlaiceholder(
    `${process.env.NEXT_PUBLIC_CDN}images/home/cubosHome.png`
  );

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
    },
  };
};

export default index;
