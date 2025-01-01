import React, { useState } from "react";
import { Link } from "react-scroll";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu after clicking a link
  };

  return (
    <div>
      {/* Hamburger Menu Button for Mobile */}
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className="fixed top-4 left-4 z-50 text-[#64ffda] focus:outline-none md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-[#0a192f] shadow-lg z-40 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-full md:w-80 md:translate-x-0 md:sticky`}
      >
        <div className="flex flex-col justify-between h-full p-6">
          {/* Branding and Close Button */}
          <div className="flex justify-between items-center md:block">
            <div>
              <h1 className="text-2xl font-bold text-white">
                Methas Mueangrit
              </h1>
              <h2 className="text-lg text-[#64ffda] mt-2">
                Full-Stack Developer
              </h2>
            </div>
            {/* Close Button for Mobile */}
            {isOpen && (
              <button
                onClick={toggleMenu}
                className="text-[#64ffda] focus:outline-none md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="mt-12 space-y-6">
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
              className="block text-lg font-medium relative group"
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-transparent group-hover:bg-[#64ffda] transition-all duration-300"></span>
              <span className="ml-8 group-hover:text-[#64ffda] transition-all duration-300">
                ABOUT
              </span>
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
              className="block text-lg font-medium relative group"
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-transparent group-hover:bg-[#64ffda] transition-all duration-300"></span>
              <span className="ml-8 group-hover:text-[#64ffda] transition-all duration-300">
                EXPERIENCE
              </span>
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
              className="block text-lg font-medium relative group"
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-transparent group-hover:bg-[#64ffda] transition-all duration-300"></span>
              <span className="ml-8 group-hover:text-[#64ffda] transition-all duration-300">
                PROJECTS
              </span>
            </Link>
          </nav>

          {/* Footer */}
          <footer className="mt-auto text-sm text-center text-gray-500">
            © 2024 Methas Mueangrit. All rights reserved.
          </footer>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
