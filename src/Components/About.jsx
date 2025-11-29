import React from "react";

const About = () => {
  return (
    <section 
      id="about"
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 font-neue"
    >
        <p className="absolute top-10 left-10 text-2xl pb-1 tracking-widest text-zinc-700 font-extrabold border-b-2 mb-2 uppercase">
          About Me
        </p>
        <div className="mt-12 lg:mt-0">
        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl bg-zinc-200 overflow-hidden shadow-sm">
          {/* Replace with your photo */}
          <img 
            src="./IMG_0864.jpg" 
            alt="Fahad Photo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Left Text Section */}
      <div className="max-w-xl">

        <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
          A Developer Focused On Clean UI & Smooth Experiences.
        </h2>

        <p className="text-lg text-zinc-600 leading-relaxed mb-6">
          Hi, I’m Fahad — a full-stack developer who loves creating modern,
          smooth, and high-quality digital experiences.  
          I work with JavaScript, React, Next.js, Node.js, MongoDB, GSAP animations,  
          and more to build beautiful and functional applications.
        </p>

        <p className="text-lg text-zinc-600 leading-relaxed mb-8">
          I enjoy transforming ideas into live products, writing clean code, 
          and designing interfaces inspired by Apple-level simplicity.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-4">
          <a 
            href="#projects"
            className="px-6 py-3 rounded-xl bg-black text-white text-sm font-semibold hover:bg-zinc-800 transition"
          >
            View My Work
          </a>

          <a 
            href="/FahadCV.pdf"
            download
            className="px-6 py-3 rounded-xl border border-black text-black text-sm font-semibold hover:bg-black hover:text-white transition"
          >
            SKILLS
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      

    </section>
  );
};

export default About;
