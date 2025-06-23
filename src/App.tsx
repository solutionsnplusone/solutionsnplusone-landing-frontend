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

// Initialize smooth scroll with proper typing
export const scroll: SmoothScroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Features />
      <About />
      <Services />
      <Gallery data={{ images: assets.gallery }} />
      <Testimonials data={{ testimonials: assets.testimonials }} />
      <Team data={{ team: assets.team }} />
      <Contact data={assets.social} />
    </div>
  );
};

export default App; 