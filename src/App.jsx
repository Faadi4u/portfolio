import React from "react";
import "./App.css";
import "./Components/Navbar.jsx";
import Navbar from "./Components/Navbar.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";

const App = () => {
  return (
    <div>
      {/* navbar  */}
      <div>
        <Navbar />
      </div>

      {/* Herosection  */}
      <div id="home" class="font-grotesk pt-15 min-h-screen bg-white">
        <div class=" absolute inset-0 grid-overlay pointer-events-none"></div>
        <div class=" z-10">
          <HeroSection />
        </div>
      </div>
      <div className="font-grotesk relative  min-h-screen bg-white">
        <div class=" absolute inset-0 grid-overlay pointer-events-none"></div>
        <div className="about">
          <About />
        </div>
      </div>
      <div className="font-grotesk relative  min-h-screen bg-white">
        <div class=" absolute inset-0 grid-overlay pointer-events-none"></div>
        <div className="about">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default App;
