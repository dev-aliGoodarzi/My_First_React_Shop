import React from "react";
import { Fade } from "react-reveal";
import LatestBeautifyNews from "../LatestBeautifyNews/LatestBeautifyNews";
import MasterItems from "../MasterItems/MasterItems";
import NewsetNews from "../NewsetNews/NewsetNews";
import WomenSuggest from "../WomenSuggest/WomenSuggest";
import BrandProducts from "../BrandProducts/BrandProducts";
const Home = () => {
  return (
    <>
      <Fade>
        <MasterItems />
      </Fade>
      <WomenSuggest />
      <Fade left>
        <NewsetNews />
        <LatestBeautifyNews />
        <BrandProducts />
      </Fade>
    </>
  );
};

export default Home;
