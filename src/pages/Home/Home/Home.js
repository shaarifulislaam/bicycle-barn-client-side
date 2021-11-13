import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div id="home">
      <Banner />
      <Products />
      <About />
      <Testimonial />
    </div>
  );
};

export default Home;
