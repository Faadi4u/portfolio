import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import "./Components/Navbar.jsx";
import gsap from "gsap";
import Navbar from "./Components/Navbar.jsx";
import HeroSection from "./Components/HeroSection.jsx";

const App = () => {
  const navbarRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user has scrolled down more than 50px
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // GSAP hide/show on scroll
      if (currentScrollY > lastScrollY) {
        gsap.to(navbarRef.current, {
          y: "-100%",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(navbarRef.current, {
          y: "0%",
          duration: 0.3,
          ease: "power2.out",
        });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div >
      {/* navbar  */}
      <div
        ref={navbarRef}
        className={`fixed ${
          scrolled
            ? "z-20 bg-transparent backdrop-filter backdrop-blur-[5px] "
            : "bg-transparent"
        }`}
      >
        <Navbar />
      </div>

      {/* Herosection  */}
      <div class="font-grotesk pt-15 min-h-screen bg-white">
        <div class="mt-[70px] absolute inset-0 grid-overlay pointer-events-none"></div>
        <div class=" z-10">
          <HeroSection /> 
        </div>
      </div>
    </div>
  );
};

export default App;
