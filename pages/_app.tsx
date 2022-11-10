import Head from 'next/head';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../src/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Digisol Agency Test Solution</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
