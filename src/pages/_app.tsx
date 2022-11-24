import type { AppProps } from "next/app";
import '../styles/global.css';
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Teste Técnico Frontend - MKPLACE</title>
        <link rel="icon" href="/favicon-mkplace.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
