import DefaultLayout from '@/components/layout/DefaultLayout/defaultLayout';
import '@/sass/app.scss';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { SSRProvider } from 'react-bootstrap';
import { rubik } from '../utils/fonts';

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
    <SSRProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
      </Head>
      <main className={rubik.className}>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </SSRProvider>
  );
}
