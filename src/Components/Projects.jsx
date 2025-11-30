import React from "react";

const projects = [
  {
    title: "ShopVerse – Full Stack Ecommerce",
    description:
      "A complete MERN ecommerce system with admin dashboard, product filters, animations, and Stripe payments.",
    tech: ["React", "GSAP", "Node.js", "MongoDB"],
    image: "/projects/shopverse.png", // your image path
  },
  {
    title: "Portfolio Website – GSAP Animations",
    description:
      "A premium interactive portfolio built with Next.js & GSAP timeline animations inspired by Ouchi design.",
    tech: ["Next.js", "GSAP", "Tailwind"],
    image: "/projects/portfolio.png",
  },
  {
    title: "Realtime Chat App",
    description:
      "A realtime chat application with authentication, typing indicators, and socket-based messaging.",
    tech: ["React", "Socket.io", "Node.js"],
    image: "/projects/chatapp.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 px-6 lg:px-16 bg-white text-black">
        
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
       <p className="absolute top-2 left-10 text-2xl pb-1 tracking-widest text-zinc-700 font-extrabold border-b-2 mb-2 uppercase">
        Projects
      </p>
        <p className="text-gray-600 mb-12 max-w-xl">
          A collection of the real-world projects I’ve built using modern
          technologies — focused on performance, UI quality, and scalability.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              {/* Image */}
              <div className="w-full h-44 mb-4 rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-black text-white rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
