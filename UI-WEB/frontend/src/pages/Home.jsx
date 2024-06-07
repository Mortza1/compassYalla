import React from "react";
import { Helmet } from 'react-helmet';
import HomeHero from "../components/HomeHero";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Compass</title>
      </Helmet>
      <HomeHero />
    </>
  );
};

export default Home;
