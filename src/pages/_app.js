import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion';
import { Montserrat } from "next/font/google";
import Head from 'next/head'
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  display: "swap",
  preload: true
});


export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/portfolio.svg' />
        <title>Dharun Kumar S H | Portfolio</title>
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen select-none`}>
        <NavBar />
        <AnimatePresence mode='wait' initial={false}>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
