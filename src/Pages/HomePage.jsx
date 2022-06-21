import React from "react";
import { Header } from "../Components/Header";
import { Slider } from "../Components/Slider";
import { Services } from "../Components/Services";

function HomePage() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Services />
    </div>
  );
}

export { HomePage };
