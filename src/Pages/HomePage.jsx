import React from "react";
import { Header } from "../Components/Header";
import { Slider } from "../Components/Slider";
import { Carousel } from "../Components/Carousel";

function HomePage() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Carousel />
    </div>
  );
}

export { HomePage };
