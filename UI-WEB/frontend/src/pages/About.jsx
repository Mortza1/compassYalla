import React from "react";
import { Helmet } from 'react-helmet';
import AboutStatement from "../components/AboutStatement";
const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <AboutStatement />
    </>
  );
};

export default About;
