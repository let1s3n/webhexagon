import Head from 'next/head';

import Home from '@/components/templates/Home/home';
export default function index() {
  return (
    <>
      <Head>
        <title>Hexagon Studio</title>
      </Head>
      <Home />
    </>
  );
}
