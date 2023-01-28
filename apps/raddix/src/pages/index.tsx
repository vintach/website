import Head from 'next/head'
import { Inter } from '@next/font/google'
import Hero from '@/components/hero'
import Header from '@/components/header'
import RootLayout from '@/layouts/RootLayout'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Head>
        <title>Raddix: React hooks library that provides UI primitives</title>
        <meta name="description" content="A library of React Hooks that provides accessible UI primitives for your design system." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <RootLayout>
        <Hero />


      </RootLayout>

    </>
  )
}
