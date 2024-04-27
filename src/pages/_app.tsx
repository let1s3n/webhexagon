import 'dotenv/config';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createContext, useState } from 'react';
import { SSRProvider } from 'react-bootstrap';
import { bebasNeue, rubik } from '../utils/fonts';

import DefaultLayout from '@/components/layout/DefaultLayout/defaultLayout';
import '@/sass/app.scss';

export const selectedProjectContext = createContext(null);

export default function App({ Component, pageProps }: AppProps) {
  const [selectedProjectData, setSelectedProjectData] = useState(null);

  /* useEffect(() => {
    console.log('APP: ', selectedProjectData);
  }, [selectedProjectData]); */

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
          <selectedProjectContext.Provider value={selectedProjectData}>
            <Component
              setSelectedProjectData={setSelectedProjectData}
              {...pageProps}
            />
          </selectedProjectContext.Provider>
        </DefaultLayout>
      </main>
    </SSRProvider>
  );
}
