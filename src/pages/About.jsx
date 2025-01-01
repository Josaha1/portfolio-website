import React from "react";

function About() {
  return (
    <section
      id="about"
      className="space-y-8 min-h-screen flex flex-col justify-center p-4 md:p-8"
    >
      {/* Section Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-white">About</h1>
      {/* Description */}
      <p className="text-sm md:text-lg leading-relaxed text-gray-400">
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
