import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <body style={{ backgroundColor: '#000000' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
