const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 pt-14 pb-8 font-neue">

      {/* TOP GRID */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Fahad</h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Full-Stack Developer crafting modern, fast and beautiful web experiences.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              {/* Phone SVG */}
              <svg width="18" height="18" fill="currentColor">
                <path d="M6.6 2C6.2 2 6 2.4 6 2.8v3c0 .3.2.6.5.7l2 1c.3.1.6 0 .7-.3l1-2c.1-.2.1-.5-.1-.7L7.5 2.4C7.3 2.2 7.1 2 6.8 2h-.2zM4 4h1v3H4V4zm11 12H9v-1h6v1zm2-3H9v-1h8v1z"/>
              </svg>
              <a href="tel:+923000000000">+92 300 0000000</a>
            </li>

            <li className="flex items-center gap-2">
              {/* Email SVG */}
              <svg width="18" height="18" fill="currentColor">
                <path d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1l-8 5-8-5V4zm0 3.2 7.4 4.6c.4.2.8.2 1.2 0L18 7.2V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7.2z"/>
              </svg>
              <a href="mailto:fahad@example.com">fahad@example.com</a>
            </li>
          </ul>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Socials</h3>
          <div className="flex gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              className="p-2 border border-gray-600 rounded-lg hover:bg-white hover:text-black transition"
            >
              <svg width="22" height="22" fill="currentColor">
                <path d="M12 .5C5.7.5.5 5.7.5 12a11.5 11.5 0 0 0 7.8 10.9c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-6A4.6 4.6 0 0 1 6.8 8a4.3 4.3 0 0 1 .1-3.1s1-.3 3.2 1.2a11 11 0 0 1 5.8 0C18 4.6 19 5 19 5a4.3 4.3 0 0 1 .1 3.1 4.6 4.6 0 0 1 1.2 3.2c0 4.7-2.7 5.7-5.3 6 .4.4.7 1 .7 2v2.9c0 .3.2.8.8.6A11.5 11.5 0 0 0 23.5 12c0-6.3-5.2-11.5-11.5-11.5z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="p-2 border border-gray-600 rounded-lg hover:bg-white hover:text-black transition"
            >
              <svg width="22" height="22" fill="currentColor">
                <path d="M4.98 3.5C3.34 3.5 2 4.85 2 6.48s1.34 2.97 2.98 2.97h.03A2.97 2.97 0 0 0 7.97 6.48 2.97 2.97 0 0 0 4.98 3.5zM2.4 21h5.2V8.9H2.4V21zM9.7 8.9V21h5.1v-6.5c0-1.7.3-3.3 2.4-3.3 2.1 0 2.1 2 2.1 3.4V21h5.1v-7.7c0-3.8-.8-6.7-5-6.7-2 0-3.3 1.1-3.8 2.2h-.1V8.9H9.7z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              className="p-2 border border-gray-600 rounded-lg hover:bg-white hover:text-black transition"
            >
              <svg width="22" height="22" fill="currentColor">
                <path d="M17.5 6.5a8.9 8.9 0 0 0-15.2 8.6l-1 3.7 3.8-1a8.9 8.9 0 0 0 12.4-11.3zm-8.6 12.2c-1.5 0-3-.5-4.3-1.3l-.3-.2-2.3.6.6-2.3-.2-.3a7.1 7.1 0 1 1 6.4 3.5zm4.3-5.2c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1l-.5.7c-.2.2-.4.2-.6.1-.3-.1-1.2-.4-2.3-1.5-1-1-1.5-2-1.6-2.3-.1-.2 0-.4.1-.6l.5-.6c.2-.2.2-.4.1-.6l-.8-1.6c-.2-.4-.5-.4-.6-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.3c.2.2 2.3 3.5 5.6 4.8 3.3 1.3 3.3.9 3.9.8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.4-.1-.1-.2-.2-.4-.3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © 2025 Fahad — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
