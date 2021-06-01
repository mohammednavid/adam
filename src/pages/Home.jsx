import React from "react";
import Carousal from "../components/Carousal";
import Header from "../components/Header";
import Services from "../components/Services";
import Workflow from "../components/Workflow";
import Features from "../components/Features";
import Ratings from "../components/Ratings";
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Carousal />
      <Services />
      <Workflow />
      <Features />
      <Ratings />
      <Footer/>
    </div>
  );
};

export default Home;
