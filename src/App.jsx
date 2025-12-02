import React from "react";
import "./App.css";
import "./Components/Navbar.jsx";
import Navbar from "./Components/Navbar.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import FAQ from "./Components/FAQ.jsx";
import Contact from "./Components/Contact.jsx";
// import Footer from "./Components/Footer.jsx";

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

      {/* About Section  */}
      <div className="font-grotesk relative  min-h-screen bg-white">
        <div class=" absolute inset-0 grid-overlay pointer-events-none"></div>
        <div className="about">
          <About />
        </div>
      </div>

      {/* SKills Section  */}
      <div className="font-grotesk relative  min-h-screen bg-white">
        <div class=" absolute inset-0 grid-overlay pointer-events-none"></div>
        <div className="about">
          <Skills />
        </div>
      </div>

      {/* Projects Section  */}
      <div className="font-grotesk relative  min-h-screen bg-white">
        <div class=" absolute inset-0 grid-overlay pointer-events-none"></div>
        <div className="about">
          <Projects/>
        </div>
      </div>

      {/* FAQs Section  */}
      <div className="font-grotesk relative min-h-screen w-full bg-white">
        <div class=" absolute inset-0 grid-overlay pointer-events-none"></div>
        <div className="">
          <FAQ/>
        </div>
      </div>
      
      {/* Contact Section  */}
      <div className="font-grotesk relative  min-h-screen bg-white">
        <div class=" absolute inset-0 grid-overlay pointer-events-none"></div>
        <div className="">
          <Contact/>
        </div>
      </div>

      {/* Footer Section  */}
      {/* <div className="font-grotesk relative  bg-white">
        <div class=" absolute inset-0 grid-overlay pointer-events-none"></div>
        <div className="">
          <Footer/>
        </div>
      </div> */}

    </div>
  );
};

export default App;
