import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 px-5 md:px-10 lg:px-20 bg-white text-black"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Contact Me
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Feel free to reach out for collaborations, projects, or just to say
          hello.
        </p>
      </div>

      {/* Contact Card */}
      <div className="max-w-3xl mx-auto bg-[#111] p-8 rounded-2xl border border-white/10 shadow-xl">
        
        <form className="flex flex-col gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-zinc-400 transition"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-zinc-400transition"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 resize-none outline-none focus:border-zinc-400 transition"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-white hover:bg-zinc-400 transition-all py-3 rounded-xl text-lg font-medium shadow-lg hover:shadow-purple-500/30"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Simple Socials */}
      <div className="text-center mt-10 text-gray-400 text-sm">
        Or reach me at:{" "}
        <span className="text-zinc-700">fahadamin.dev@gmail.com</span>
      </div>
    </section>
  );
};

export default Contact;
