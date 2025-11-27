import React from "react";
import "./App.css";
import "./Components/Navbar.jsx";
import Navbar from "./Components/Navbar.jsx";
import HeroSection from "./Components/HeroSection.jsx";

const App = () => {

  return (
    <div >
      {/* navbar  */}
      <div>
        <Navbar />
      </div>

      {/* Herosection  */}
      <div class="font-grotesk pt-15 min-h-screen bg-white">
        <div class=" absolute inset-0 grid-overlay pointer-events-none"></div>
        <div class=" z-10">
          <HeroSection /> 
        </div>
      </div>
    </div>
  );
};

export default App;
