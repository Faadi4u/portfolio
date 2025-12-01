import { useState } from "react";

const FAQ = () => {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      q: "What technologies are used in this portfolio?",
      a: "This portfolio is built with React, Tailwind CSS, GSAP animations, and a fully responsive UI designed to match premium modern websites."
    },
    {
      q: "How did you create the animations?",
      a: "All animations are built using GSAP with timeline-based and scroll-based interactions for smooth, fluid motion."
    },
    {
      q: "Are the projects displayed real and deployable?",
      a: "Yes. All projects in the showcase are real, fully functional, and deployable MERN stack applications with modern UI/UX."
    },
    {
      q: "How can I contact you for work or collaboration?",
      a: "Use the contact form in the Contact section or reach out directly via LinkedIn, GitHub, or WhatsApp (links in the footer)."
    },
    {
      q: "Is this portfolio optimized for mobile devices?",
      a: "Absolutely. The entire layout — hero, about, skills, projects, and contact — is fully responsive with mobile-first design."
    }
  ];

  return (
    <div className="w-full bg-[#f9f9f9] py-20 px-6 md:px-16 font-neue">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-black tracking-tight">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => setActive(active === index ? null : index)}
              className="w-full text-left flex justify-between items-center"
            >
              <span className="text-xl font-semibold text-black">
                {item.q}
              </span>

              <span className="text-2xl font-bold">
                {active === index ? "-" : "+"}
              </span>
            </button>

            {active === index && (
              <p className="mt-3 text-gray-600 leading-relaxed text-[16px]">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
