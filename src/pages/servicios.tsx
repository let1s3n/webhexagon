import Servicios from '@/components/templates/Servicios/servicios';
import type { InferGetStaticPropsType } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import React from 'react';

const servicios: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  imageProps,
}) => {
  return <Servicios imageProps={imageProps} />;
};

export const getStaticProps = async () => {
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
