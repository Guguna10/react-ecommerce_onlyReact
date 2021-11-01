
import React from 'react';
import Layout from './shared/layout';
import Hero from './hero/Hero';
import MainSection from './mainSection/MainSection';
import FeaturedCollection from './featuredCollection/FeaturedCollection';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
      </Layout>
    </>
  );
}

export default HomePage;