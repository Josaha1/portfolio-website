import React from "react";

function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "National Health Foundation, Social Align Co., Ltd",
      time: "2024 — Present",
      description:
        "Analyze, design, develop, and maintain the organization website systems, as well as create new tools to enhance operational efficiency.",
      skills: [
        "JavaScript",
        "TypeScript",
        "Vue",
        "PHP",
        "Laravel",
        "MySQL",
        "Tailwind CSS",
        "Applied Generative AI",
      ],
    },
    {
      title: "Junior Developer",
      company: "National Health Foundation",
      time: "2021 — 2023",
      description: "Developed and shipped high-quality web apps.",
      skills: ["JavaScript", "PHP", "MySQL", "HTML", "Bootstrap"],
    },
  ];

  return (
    <section
      id="experience"
      className="space-y-12 min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-20"
    >
      {/* Section Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center md:text-left">
        Experience
      </h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#112240] p-6 md:p-8 rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
          >
            {/* Title and Timeline */}
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
              <div className="mb-2 md:mb-0">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  {exp.title}
                </h2>
                <h3 className="text-md md:text-lg text-gray-400">
                  {exp.company}
                </h3>
              </div>
              <span className="text-sm text-gray-400 italic">{exp.time}</span>
            </div>
            {/* Description */}
            <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
              {exp.description}
            </p>
            {/* Skills */}
            <div className="flex flex-wrap gap-3 mt-4">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium text-[#64ffda] bg-[#0a192f] shadow-md hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
