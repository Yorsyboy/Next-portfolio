import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Technogies from '../components/Technogies'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <Layout>
          <Hero />
          <Technogies />
        </Layout>
      </main>
    </>
  )
}
