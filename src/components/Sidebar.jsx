import React from "react";
import { Link } from "react-scroll";

function Sidebar() {
  return (
    <aside className="w-1/4 h-screen sticky top-0 bg-[#0a192f] text-gray-300 flex flex-col justify-between p-8 shadow-lg">
      <div>
        <h1 className="text-4xl font-bold text-white">Methas Mueangrit</h1>
        <h2 className="text-lg text-[#64ffda] mt-2">Full-Stack Developer</h2>
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
      </div>
      <footer className="text-sm text-gray-500">
        © 2024 Methas Mueangrit. All rights reserved.
      </footer>
    </aside>
  );
}

export default Sidebar;
