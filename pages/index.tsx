import type { NextPage } from 'next';
import Head from 'next/head';

import HomeContainer from '../src/component/home/HomeContainer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IsThereAnyRepo</title>
        <meta name="description" content="github repo search page" />
      </Head>
      <HomeContainer />
    </>
  );
};

export default Home;
