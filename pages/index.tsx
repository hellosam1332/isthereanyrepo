import type { NextPage } from 'next';
import Head from 'next/head';

import HomeComponent from '../src/component/home/Home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IsThereAnyRepo</title>
        <meta name="description" content="github repo search page" />
      </Head>
      <HomeComponent />
    </>
  );
};

export default Home;
