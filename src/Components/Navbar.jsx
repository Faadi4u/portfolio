import React, { useState, useRef  } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Navbar hide on scroll down, show on scroll up
  
 

  let menuItems = ["Home", "About", "Skills", "Projects", "Contact me"];
// Mobile Menu Hover
   const navRefsMbl = useRef([]);
  let onMouseEnter_1 = (mbl) => {
    gsap.fromTo(
      mbl,
      { x: "-30%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      }
    );
  };
  let onMouseLeave_1 = (mbl) => {
    gsap.to(mbl, {
      opacity: 0,
      x: "50%",
      immediateRender: false,
      duration: 0.3,
      ease: "power2.in",
    });
  };
  // Desktop Menu Hover
  const navRefsDes = useRef([]);
  let onMouseEnter_2 = (des) => {
    gsap.fromTo(
      des,
      { x: "-30%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      }
    );
  };
  let onMouseLeave_2 = (des) => {
    gsap.to(des, {
      opacity: 0,
      x: "50%",
      immediateRender: false,
      duration: 0.3,
      ease: "power2.in",
    });
  };

  // Mobile Menu 
  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(menuRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        pointerEvents: "none",
      });
    }
  }, [isOpen]);

  return (
    <>
      <div  className={`NavBAr relative flex justify-between h-full w-screen px-5 min-[1024px]:pl-13 pr-0 py-4 font-neue `}>
        {/* Desktop MENU  */}
        {isOpen ? (
          <div className="Logo">
            <h1 className="relative text-3xl z-50 text-white font-bold">
              Fahad
            </h1>
          </div>
        ) : (
          <div className="Logo">
            <h1 className="min-[1024px]:text-4xl text-xl font-bold">Fahad</h1>
          </div>
        )}

        <div className="NavElems flex items-center min-[1024px]:gap-3 gap-2 ">
          <div className="navItems flex gap-10">
            {menuItems.map((items, index) => (
              <ul
                className={`flex overflow-hidden max-[1024px]:hidden ${
                  index === 4 && "ml-36"
                }`}
                key={index}
                href=""
              >
                <li
                  onMouseEnter={() => {
                    onMouseEnter_2(navRefsDes.current[index]);
                  }}
                  onMouseLeave={() => {
                    onMouseLeave_2(navRefsDes.current[index]);
                  }}
                  className="flex flex-col cursor-pointer"
                >
                  {items}
                  <span
                    ref={(des) => {
                      navRefsDes.current[index] = des;
                    }}
                    className="border opacity-0"
                  ></span>
                </li>
              </ul>
            ))}
          </div>

          {/* MENU ICON */}
          <div
            onClick={() => setOpen(!isOpen)}
            className="Menu min-[1024px]:hidden "
          >
            {isOpen ? (
              <svg
                onClick={() => setOpen(false)}
                className="min-[1024px]:h-6 h-7 relative z-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            ) : (
              <svg
                className="min-[1024px]:h-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(0,0,0,1)"
              >
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg>
            )}
          </div>
          {/* DARK MODE BUTTON */}
          {isOpen ? (
            <button className="group cursor-pointer relative bg-white z-50 pr-5 pl-2 py-2 rounded-l-xl text-white ">
              <svg
                className="h-5  min-[1024px]:group-hover:hidden "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
              >
                <path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path>
              </svg>
              <p className="min-[1024px]:group-hover:block hidden">DARK MODE</p>
            </button>
          ) : (
            <button className="group cursor-pointer bg-black pr-5 pl-2 py-2 rounded-l-xl text-white">
              <svg
                className="h-5 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU  */}
      <div
        ref={menuRef}
        className="mobileNav fixed top-0  left-0 h-full w-full opacity-0 scrollbar-none  min-[1024px]:hidden"
      >
        <div className="navItems h-full w-full flex flex-col bg-[#212121] text-2xl">
          <div className=" border mt-30 border-zinc-600 w-full  "></div>
          {["HOME", "ABOUT", "SKILLS", "PROJECT", "CONTACT"].map(
            (items, index) => (
              <ul
                className={
                  index < 10 &&
                  "w-fit overflow-hidden max-[768px]:text-[64px]/6 tracking-tighter text-[80px]/10 font-extrabold ml-4.5 text-white "
                }
                key={index}
                href=""
              >
                <li
                  onMouseEnter={() => {
                    onMouseEnter_1(navRefsMbl.current[index]);
                  }}
                  onMouseLeave={() => {
                    onMouseLeave_1(navRefsMbl.current[index]);
                  }}
                  className="font-grotesk flex flex-col mt-5  cursor-pointer"
                >
                  {items}
                  <span
                    ref={(mbl) => {
                      navRefsMbl.current[index] = mbl;
                    }}
                    className="border-3 mt-4 rounded opacity-0"
                  ></span>
                </li>
              </ul>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
