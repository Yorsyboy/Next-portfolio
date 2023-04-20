import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Technogies from '../components/Technogies'
import Projects from '../components/Projects'
import userData from '../../constants/data'
import LastestRepo from '../components/LastestRepo'

export default function Home({ repositories }) {
  return (
    <>
      <Head>
        <title>Toyosi Taiwo - Software Developer </title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content="A Software Developer passionate about building web applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/avatar.jpg" />
      </Head>
      <main className=''>
        <Layout>
          <Hero />
          <Technogies />
          <Projects />
          <LastestRepo repositories={repositories} />
        </Layout>
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;


    const username = userData.githubUsername;

    const repos = await fetch(
      `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    ).then(res => res.json())

    const repositories = repos.items.splice(13, 6);

  return {
    props: {
      repositories,
    },
  };
};