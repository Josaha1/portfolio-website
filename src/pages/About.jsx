import React from "react";

function About() {
  return (
    <section
      id="about"
      className="space-y-6 sm:space-y-8 min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-20"
    >
      {/* Section Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-white text-center md:text-left">
        About
      </h1>
      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-400 text-justify md:text-left">
        I am a system developer with expertise in creating websites and backend
        systems. At my previous company, I was responsible for system analysis,
        website and backend development, as well as server maintenance. I am
        seeking a challenging role that fosters continuous learning and growth.
        I am always open to embracing new opportunities and ideas. I sincerely
        look forward to the opportunity to work with you.
      </p>
    </section>
  );
}

export default About;
