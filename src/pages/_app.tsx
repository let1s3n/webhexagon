import type { AppProps } from "next/app";

import { SSRProvider } from 'react-bootstrap';
import DefaultLayout from '@/components/layout/DefaultLayout/defaultLayout';
import '@/sass/app.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </SSRProvider>
  );
}
