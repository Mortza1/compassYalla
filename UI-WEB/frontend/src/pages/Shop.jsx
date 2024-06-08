import React from "react";
import { Helmet } from 'react-helmet';
import ShopPage from "../components/ShopPage";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Compass</title>
      </Helmet>
      <ShopPage />
    </>
  );
};

export default Home;
