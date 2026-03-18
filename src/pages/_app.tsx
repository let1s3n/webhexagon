import DefaultLayout from '@/components/layout/DefaultLayout/defaultLayout';
import '@/styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function commonLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => commonLayout(page));
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
      </Head>
      <div
        className={`${inter.className} min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white`}
      >
        {getLayout(<Component {...pageProps} />)}
      </div>
    </>
  );
}
