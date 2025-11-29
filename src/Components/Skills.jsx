import React from "react";

const skillsData = [
  {
    title: "Frontend Development",
    items: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 92 },
      { name: "Redux", level: 80 },
    ],
  },

  {
    title: "CSS Frameworks & Libraries",
    items: [
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap", level: 85 },
      { name: "Material UI", level: 82 },
      { name: "Styled Components", level: 80 },
    ],
  },

  {
    title: "Animation & Motion",
    items: [
      { name: "GSAP", level: 88 },
      { name: "CSS Animations", level: 92 },
      { name: "Framer Motion", level: 75 },
      { name: "Lenis", level: 70 },
      { name: "AOS", level: 90 },
    ],
  },
  {
    title: "Backend Development",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 92 },
      { name: "MOngoDB", level: 75 },
      { name: "Rest API", level: 73 },
    ],
  },
  {
    title: "Development Tool",
    items: [
      { name: "GitHub", level: 88 },
      { name: "Vs Code", level: 92 },
      { name: "NPM", level: 75 },
      { name: "Yarn", level: 71 },
    ],
  },
  {
    title: "Design And Deployment",
    items: [
      { name: "Figma", level: 88 },
      { name: "Postman", level: 92 },
      { name: "Netlify", level: 87 },
      { name: "Vercel", level: 78 },
      { name: "Heroku", level: 80 },
      { name: "AWS", level: 84 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="w-full relative py-20 px-6 md:px-12 lg:px-20 "
    >
      <p className="absolute top-2 left-10 text-2xl pb-1 tracking-widest text-zinc-700 font-extrabold border-b-2 mb-2 uppercase">
        SKILLS
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((category, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl border border-white/10 bg-[#121212]  text-white backdrop-blur-lg shadow-md transition-all duration-500"
          >
            <h3 className="text-xl font-semibold mb-6">{category.title}</h3>

            <div className="space-y-6">
              {category.items.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <p className="">{skill.name}</p>
                    <p className="">{skill.level}%</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
