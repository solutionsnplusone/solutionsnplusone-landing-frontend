import React from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { assets } from "./config/assets";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Features />
      <About />
      <Services />
      <Gallery data={assets.gallery} />
      <Testimonials data={assets.testimonials} />
      <Team data={assets.team} />
      <Contact data={assets.social} />
    </div>
  );
};

export default App;
