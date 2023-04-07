import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Movie App</title>
      </Head>
      <SessionProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      </SessionProvider>
    </>
  );
}
