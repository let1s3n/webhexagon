import type { AppProps } from 'next/app';

import DefaultLayout from '@/components/layout/DefaultLayout/defaultLayout';
import '@/sass/app.scss';
import { SSRProvider } from 'react-bootstrap';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </SSRProvider>
  );
}
