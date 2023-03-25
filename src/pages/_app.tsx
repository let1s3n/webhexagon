import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SSRProvider } from 'react-bootstrap';
import { bebasNeue, rubik } from '../lib/fonts';

import DefaultLayout from '@/components/layout/DefaultLayout/defaultLayout';
import '@/sass/app.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
      </Head>
      <main className={rubik.className}>
        <DefaultLayout>
          <style jsx global>{`
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-family: ${bebasNeue.style.fontFamily};
            }
          `}</style>
          <Component {...pageProps} />
        </DefaultLayout>
      </main>
    </SSRProvider>
  );
}
