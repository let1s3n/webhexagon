import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import { Container } from 'react-bootstrap';

export default function Custom404() {
  return (
    <Container>
      <Link
        href="/"
        passHref
        className="p-0 m-0 d-flex align-items-center"
        style={{ columnGap: '20px' }}
      >
        <Image
          className="logo"
          src={`${process.env.NEXT_PUBLIC_CDN}images/general/logo2.png`}
          alt="Hexagon Logo"
          width={53}
          height={61}
          priority
          quality={100}
        />

        <p className="fw-bold kalekoBold text-black">Regresar</p>
      </Link>
      <h1 style={{ padding: '100px 0px 0px 0px' }}>
        Oops, página no encontrada
      </h1>
    </Container>
  );
}

Custom404.getLayout = function getLayout(page: ReactElement) {
  /* return <DefaultLayout>{page}</DefaultLayout>; */
  return page;
};
