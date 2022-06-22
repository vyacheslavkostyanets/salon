import React from "react";
import { Header } from "../Components/Home/Header";
import { Slider } from "../Components/Home/Slider";
import { Carousel } from "../Components/Home/Carousel";
import { Partners } from "../Components/Home/Partners";
import { AboutUs } from "../Components/Home/AboutUs";
import { Footer } from "../Components/Home/Footer";

function HomePage() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <AboutUs />
      <Carousel />
      <Partners />
      <Footer />
    </div>
  );
}

export { HomePage };
